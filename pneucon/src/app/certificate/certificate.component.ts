import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'] // <-- fixed here
})
export class CertificateComponent {

  certImages = [
    {
      img: 'assets/images/BIZSAFE STAR CERTIFICATE - 25062027.jpg',
      pdf: 'assets/Certificate/bizsafe.pdf',
      alt: 'Bizzsafe Certificate'
    },
    {
      img: 'assets/images/ISO 45001 CERT - PNEUCON ENGINEERING PTE. LTD..jpg',
      pdf: 'assets/Certificate/iso.pdf',
      alt: 'ISO Certificate'
    },
    {
      img: 'assets/images/SINGAPORE BUSINESS FEDERATION.jpg',
      pdf: 'assets/Certificate/singapore.pdf',
      alt: 'Singapore Certificate'
    }
  ];

  selectedPdf: string | null = null;
  safePdfUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  openCertificate(pdfPath: string) {
    // this.selectedPdf = pdfPath;
      window.open(pdfPath, '_blank');
      this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfPath);
  }

  closePdf() {
    this.selectedPdf = null;
  }

  // slideCertificates(direction: number) {
  //   if (direction === 1) {
  //     const first = this.certImages.shift();
  //     if (first) this.certImages.push(first);
  //   } else if (direction === -1) {
  //     const last = this.certImages.pop();
  //     if (last) this.certImages.unshift(last);
  //   }
  // }
}