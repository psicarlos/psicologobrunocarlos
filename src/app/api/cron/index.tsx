import { getYouTubeVideos } from '@/components/canal/YouTubeVideos';

// Função de endpoint para revalidar cache dos vídeos do YouTube
export async function GET() {
  try {
    // Chama a função que busca os vídeos do YouTube
    const videos = await getYouTubeVideos();

    // Loga os dados recebidos (isso pode ser substituído por qualquer ação que você queira tomar com os dados)
    console.log('Vídeos atualizados:', videos);

    // Retorna uma resposta JSON com os vídeos
    return new Response(JSON.stringify(videos), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Loga o erro e retorna uma resposta de erro apropriada
    console.error('Erro ao atualizar vídeos:', error);
    return new Response('Erro ao atualizar vídeos', {
      status: 500,
    });
  }
}
