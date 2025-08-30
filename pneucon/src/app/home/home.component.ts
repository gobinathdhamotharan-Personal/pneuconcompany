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
    const video: HTMLVideoElement | null = document.querySelector('.video-background');
    if (video) {
      video.muted = true;
      video.play().catch(err => console.log('Autoplay blocked:', err));
    }
  }
}