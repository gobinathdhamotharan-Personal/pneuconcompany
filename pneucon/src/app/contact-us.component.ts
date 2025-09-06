import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor() {
    this.preloadImage('assets/images/office-desktop-with-laptop-business-man.jpg');
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
