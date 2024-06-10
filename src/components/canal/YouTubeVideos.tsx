export async function getYouTubeVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  const apiURL = process.env.YOUTUBE_API_URL;
  const maxResults = 6;

  try {
    const data = await fetch(
      `${apiURL}?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&maxResults=${maxResults}`,
      { next: { revalidate: 86400 } },
    );

    if (!data.ok) {
      throw Error('Falha no fetch');
    }

    return await data.json();
  } catch (error) {
    Error;
  }
}
