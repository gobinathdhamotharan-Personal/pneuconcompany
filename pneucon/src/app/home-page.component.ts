import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { CertificateComponent } from './certificate/certificate.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeComponent, ServiceComponent, CertificateComponent,NewsletterComponent],
  template: `
    <app-home></app-home>
    <app-service></app-service>
    <app-newsletter></app-newsletter>
    <app-certificate></app-certificate>
  `
})
export class HomePageComponent {}
