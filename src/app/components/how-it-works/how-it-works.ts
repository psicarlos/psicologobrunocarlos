import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  imports: [],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks implements OnInit, OnDestroy {
  currentIndex = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  images = [
    { src: 'assets/imagem/recepção.jpeg', alt: 'Recepção do consultório' },
    { src: 'assets/imagem/recepção 4.jpeg', alt: 'Recepção do consultório' },
    { src: 'assets/imagem/sala.jpeg', alt: 'Sala de atendimento' },
    { src: 'assets/imagem/sala 2.jpeg', alt: 'Sala de atendimento' },
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex.update((i) => (i + 1) % this.images.length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
    if (this.intervalId) clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.currentIndex.update((i) => (i + 1) % this.images.length);
    }, 5000);
  }
}
