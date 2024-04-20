import React from 'react';
import { getYouTubeVideos } from './YouTubeVideos';

type YouTubeResponse = {
  items: Video[];
};

type Video = {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    title: string;
  };
};

export default async function Canal() {
  const videos: YouTubeResponse = await getYouTubeVideos();

  return (
    <section className="py-24 px-4 md:px-0 md:max-w-6xl md:mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        ME ACOMPANHE TAMBÉM PELO YOUTUBE:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.items.map((video: Video) => (
          <div key={video.id.videoId} className=" m-auto">
            <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
