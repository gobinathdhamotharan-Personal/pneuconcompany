import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  speak(text: string): void {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;   // speed (0.5 = slow, 1 = normal, 2 = fast)
      utterance.pitch = 1;  // tone
      utterance.volume = 1; // volume (0 to 1)
      utterance.lang = 'en-US'; // voice language

      window.speechSynthesis.speak(utterance);

    }
  }
}
