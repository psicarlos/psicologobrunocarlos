// import { getYouTubeVideos } from '../../../components/canal/YouTubeVideos';

import { NextRequest, NextResponse } from 'next/server';

// // Função de endpoint para revalidar cache dos vídeos do YouTube
// export async function GET() {
//   type YouTubeResponse = {
//     items: Video[];
//   };

//   type Video = {
//     id: {
//       kind: string;
//       videoId: string;
//     };
//     snippet: {
//       title: string;
//     };
//   };

//   try {
//     const videos: YouTubeResponse = await getYouTubeVideos();

//     console.log('Vídeos atualizados:', videos);

//     return new Response(JSON.stringify(videos), {
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Erro ao atualizar vídeos:', error);
//     return new Response('Erro ao atualizar vídeos', {
//       status: 500,
//     });
//   }
// }

export async function GET(request: NextRequest) {
  console.log('Con job ram at: ', new Date());

  return new NextResponse('cron ran', { status: 200 });
}
