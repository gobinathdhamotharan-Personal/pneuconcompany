import { Component, AfterViewInit, ElementRef, NgZone, OnInit, OnDestroy } from '@angular/core';
import { TextToSpeechService } from '../text-to-speech.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

    // Preload image in a service
  preloadImage(url: string): Promise<void> {
    return new Promise(resolve => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
    });
  }
  private intro = `Pneucon Engineering PTE Ltd. Singapore, Malaysia.
  Established in 2004, Pneucon Engineering has proven through the years 
  in Main Engine Maneuvering Remote Control Systems, Automation Systems and Trading.`;

  constructor(private tts: TextToSpeechService) {}

  ngOnInit(): void {
    // Try autoplay after refresh
    setTimeout(() => {
      this.tts.speak(this.intro);
    }, 500);

    // Fallback if blocked → wait for first user action
    const unlock = () => {
      this.tts.speak(this.intro);
      document.removeEventListener('click', unlock);
      document.removeEventListener('keydown', unlock);
    };

    document.addEventListener('click', unlock);
    document.addEventListener('keydown', unlock);
  }

  ngOnDestroy(): void {
    // ✅ Stop any ongoing speech when leaving home page
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}