import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Testimonials } from './components/testimonials/testimonials';
import { YoutubeGalleryComponent } from './components/youtube-gallery/youtube-gallery';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { WhatsappFloat } from './components/whatsapp-float/whatsapp-float';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Services, HowItWorks, Testimonials, YoutubeGalleryComponent, Contact, Footer, WhatsappFloat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
