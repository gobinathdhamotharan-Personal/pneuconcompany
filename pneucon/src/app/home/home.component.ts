import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// export class HomeComponent {
//   constructor(private el: ElementRef) {}

// }
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    this.preloadImage('assets/images/cargo-ship-navigating-ocean.jpg');
    const video: HTMLVideoElement | null = document.querySelector('.video-background');
    if (video) {
      video.muted = true;
      video.play().catch(err => console.log('Autoplay blocked:', err));
    }
  }

  // Preload image in a service
  preloadImage(url: string): Promise<void> {
    return new Promise(resolve => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
    });
  }

}