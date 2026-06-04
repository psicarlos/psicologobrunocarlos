import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  videoId: string;
}

@Component({
  selector: 'app-youtube-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-gallery.html',
  styleUrl: './youtube-gallery.css'
})
export class YoutubeGalleryComponent implements OnInit {
  private readonly maxVideos = 4;
  videos = signal<YouTubeVideo[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  constructor(private sanitizer: DomSanitizer) {}

  async ngOnInit() {
    try {
      // Busca o JSON gerado pelo Job/Automação
      const response = await fetch('/assets/data/videos.json', {
        cache: 'no-cache'
      });
      
      if (!response.ok) {
        throw new Error(`Erro ao carregar vídeos: ${response.status}`);
      }
      
      const data = await response.json();
      const videosList = data.videos || [];
      
      if (videosList.length === 0) {
        this.error.set('Nenhum Short encontrado. Execute o script de atualização para buscar Shorts do YouTube.');
      } else {
        this.videos.set(videosList.slice(0, this.maxVideos));
      }
      
      this.isLoading.set(false);
    } catch (err) {
      this.error.set('Não foi possível carregar os Shorts do YouTube. Verifique se o arquivo videos.json existe.');
      this.isLoading.set(false);
      console.error('Erro ao carregar vídeos:', err);
    }
  }

  getEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
