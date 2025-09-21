import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  categories: string[] = [
    'All', 'Alpha Lubricator', 'Mechanical Lubricator', 'UEC / ECO Engine', 'Sulzer RTA / RT-Flex Engine', 'MAN B&W / ME-B / ME-C'
  ];

  selectedCategory: string = 'All';

  galleryItems: GalleryItem[] = [
    { src: '../../assets/images/Gallery.jpg', title: 'Alpha Lubricator', category: 'Alpha Lubricator' },
    { src: '../../assets/images/Gallery.jpg', title: 'Mechanical Lubricator', category: 'Mechanical Lubricator' },
    { src: '../../assets/images/Gallery.jpg', title: 'UEC / ECO Engine', category: 'UEC / ECO Engine' },
    { src: '../../assets/images/Gallery1.jpg', title: 'Sulzer RTA Engine', category: 'Sulzer RTA / RT-Flex Engine' },
    { src: '../../assets/images/Gallery1.jpg', title: 'MAN B&W Engine', category: 'MAN B&W / ME-B / ME-C' },
  ];

  lightboxOpen = false;
  currentIndex = 0;

  filterCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredItems() {
    if (this.selectedCategory === 'All') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.selectedCategory);
  }

  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.filteredItems.length) % this.filteredItems.length;
  }

  nextImage() {
    this.currentIndex =
      (this.currentIndex + 1) % this.filteredItems.length;
  }
}
