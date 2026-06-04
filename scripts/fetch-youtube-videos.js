/**
 * Script para buscar vídeos do YouTube usando a YouTube Data API v3
 * 
 * Configuração necessária:
 * 1. Obter API Key do Google Cloud Console
 * 2. Habilitar YouTube Data API v3
 * 3. Configurar variáveis de ambiente ou criar arquivo .env
 * 
 * Para usar:
 * node scripts/fetch-youtube-videos.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Carrega variáveis de ambiente do arquivo .env
function loadEnvFile() {
  const envPath = path.join(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      // Ignora comentários e linhas vazias
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          // Remove aspas se houver
          const cleanValue = value.replace(/^["']|["']$/g, '');
          process.env[key.trim()] = cleanValue;
        }
      }
    });
  }
}

// Carrega o .env antes de usar as variáveis
loadEnvFile();

// Configurações - Substitua com suas credenciais
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || 'YOUR_API_KEY';
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'YOUR_CHANNEL_ID';
const YOUTUBE_USERNAME = process.env.YOUTUBE_USERNAME || ''; // Opcional: username do canal
const MAX_RESULTS = parseInt(process.env.MAX_RESULTS || '4', 10);
const OUTPUT_FILE = path.join(__dirname, '../public/assets/data/videos.json');

// Base URL da YouTube Data API v3
const API_BASE_URL = 'www.googleapis.com';

/**
 * Busca o Channel ID pelo username (se necessário)
 */
async function getChannelIdByUsername(username) {
  if (!username) return null;
  
  return new Promise((resolve, reject) => {
    const queryParams = new URLSearchParams({
      part: 'id',
      forUsername: username,
      key: YOUTUBE_API_KEY
    });

    const options = {
      hostname: API_BASE_URL,
      path: `/youtube/v3/channels?${queryParams.toString()}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.items && response.items.length > 0) {
            resolve(response.items[0].id);
          } else {
            resolve(null);
          }
        } catch (error) {
          resolve(null);
        }
      });
    });

    req.on('error', (error) => {
      resolve(null);
    });

    req.end();
  });
}

/**
 * Busca Shorts do canal (vídeos com duração menor que 60 segundos)
 */
async function fetchVideos(channelId) {
  return new Promise((resolve, reject) => {
    // Primeiro busca os vídeos do canal (ordenados por data, mais recentes primeiro)
    const queryParams = new URLSearchParams({
      part: 'snippet',
      channelId: channelId,
      maxResults: (MAX_RESULTS * 4).toString(), // Busca mais para garantir que temos Shorts suficientes após filtrar
      order: 'date', // Ordena por data (mais recentes primeiro)
      type: 'video',
      key: YOUTUBE_API_KEY
    });

    const options = {
      hostname: API_BASE_URL,
      path: `/youtube/v3/search?${queryParams.toString()}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', async () => {
        try {
          const response = JSON.parse(data);
          
          if (response.error) {
            reject(new Error(`Erro da API: ${response.error.message || JSON.stringify(response.error)}`));
            return;
          }
          
          if (response.items) {
            // Busca detalhes dos vídeos para filtrar Shorts (duração < 60s)
            const videoIds = response.items.map(item => item.id.videoId).join(',');
            const videoDetails = await getVideoDetails(videoIds);
            
            // Filtra apenas Shorts (duração menor que 60 segundos)
            // Mantém a ordem original (mais recentes primeiro) da API
            const shorts = response.items.filter((item, index) => {
              const details = videoDetails.find(v => v.id === item.id.videoId);
              if (details && details.contentDetails) {
                const duration = parseDuration(details.contentDetails.duration);
                return duration <= 300; // Shorts são vídeos de até 60 segundos
              }
              return false;
            }).slice(0, MAX_RESULTS); // Limita ao número máximo desejado (já ordenados por data)
            
            // Garante que os mais recentes estão primeiro (ordena por publishedAt se necessário)
            shorts.sort((a, b) => {
              const dateA = new Date(a.snippet.publishedAt);
              const dateB = new Date(b.snippet.publishedAt);
              return dateB - dateA; // Mais recentes primeiro
            });
            
            resolve(shorts);
          } else {
            reject(new Error('Formato de resposta inesperado: ' + JSON.stringify(response)));
          }
        } catch (error) {
          reject(new Error('Erro ao parsear resposta: ' + error.message + ' | Data: ' + data.substring(0, 200)));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

/**
 * Busca detalhes dos vídeos (incluindo duração)
 */
async function getVideoDetails(videoIds) {
  return new Promise((resolve, reject) => {
    const queryParams = new URLSearchParams({
      part: 'contentDetails',
      id: videoIds,
      key: YOUTUBE_API_KEY
    });

    const options = {
      hostname: API_BASE_URL,
      path: `/youtube/v3/videos?${queryParams.toString()}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.items) {
            resolve(response.items);
          } else {
            resolve([]);
          }
        } catch (error) {
          resolve([]);
        }
      });
    });

    req.on('error', (error) => {
      resolve([]);
    });

    req.end();
  });
}

/**
 * Converte duração ISO 8601 para segundos
 * Exemplo: PT1M30S = 90 segundos
 */
function parseDuration(duration) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  
  const hours = parseInt(match[1] || 0, 10);
  const minutes = parseInt(match[2] || 0, 10);
  const seconds = parseInt(match[3] || 0, 10);
  
  return hours * 3600 + minutes * 60 + seconds;
}

/**
 * Formata os vídeos para o formato esperado pelo frontend
 */
function formatVideos(videos) {
  return videos.map(video => ({
    id: video.id.videoId,
    videoId: video.id.videoId,
    title: video.snippet.title,
    description: video.snippet.description,
    thumbnail: video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.default?.url,
    publishedAt: video.snippet.publishedAt
  }));
}

/**
 * Função principal
 */
async function main() {
  try {
    if (!YOUTUBE_API_KEY || YOUTUBE_API_KEY === 'YOUR_API_KEY') {
      const hint = process.env.GITHUB_ACTIONS
        ? 'Configure o secret YOUTUBE_API_KEY em Settings → Secrets and variables → Actions'
        : 'Configure no arquivo .env';
      throw new Error(`YOUTUBE_API_KEY não configurada. ${hint}`);
    }

    let channelId = YOUTUBE_CHANNEL_ID;

    // Se não tiver channelId mas tiver username, tenta buscar
    if ((!channelId || channelId === 'YOUR_CHANNEL_ID') && YOUTUBE_USERNAME) {
      console.log(`🔍 Buscando Channel ID pelo username: ${YOUTUBE_USERNAME}...`);
      channelId = await getChannelIdByUsername(YOUTUBE_USERNAME);
      if (channelId) {
        console.log(`✅ Channel ID encontrado: ${channelId}`);
      } else {
        throw new Error('Não foi possível encontrar o Channel ID pelo username');
      }
    }

    if (!channelId || channelId === 'YOUR_CHANNEL_ID') {
      const hint = process.env.GITHUB_ACTIONS
        ? 'Configure YOUTUBE_CHANNEL_ID (ou YOUTUBE_USERNAME) nos secrets do repositório'
        : 'Configure no arquivo .env';
      throw new Error(`YOUTUBE_CHANNEL_ID não configurada. ${hint}`);
    }

    console.log(`📹 Buscando Shorts do canal: ${channelId}...`);
    const videos = await fetchVideos(channelId);
    console.log(`✅ ${videos.length} Shorts encontrados`);

    const formattedVideos = formatVideos(videos);

    // Ordena os vídeos formatados por data (mais recentes primeiro)
    formattedVideos.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB - dateA; // Mais recentes primeiro
    });

    // Sempre atualiza com os Shorts mais recentes (não mantém os antigos)
    // Isso garante que sempre teremos os Shorts mais recentes do canal
    const videosData = {
      videos: formattedVideos.slice(0, MAX_RESULTS), // Limita ao número máximo
      lastUpdated: new Date().toISOString()
    };
    
    console.log(`📊 Total de Shorts mais recentes: ${videosData.videos.length}`);

    // Garante que o diretório existe
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Salva o arquivo com os Shorts mais recentes
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(videosData, null, 2));
    console.log(`✅ Arquivo atualizado: ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  }
}

// Executa o script
if (require.main === module) {
  main();
}

module.exports = { main, fetchVideos, formatVideos };
