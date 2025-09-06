import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
newsList: NewsArticle[] = [
  {
    id: 1,
    title: 'Appointment of Junma Services',
    category: 'News',
    date: '2025-08-21',
    image: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.maritime-executive.com/'
  },
  {
    id: 2,
    title: 'Top 10 best ship repair and service company in Singapore',
    category: 'Enterprise Dynamics',
    date: '2025-08-21',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.businessinsider.com/' // sample link
  },
  {
    id: 3,
    title: 'From the desk to deck',
    category: 'Enterprise Dynamics',
    date: '2025-08-21',
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.straitstimes.com/' // sample link
  },
  {
    id: 4,
    title: 'Most Iconic Leaders Making a Difference in 2025',
    category: 'Enterprise Dynamics',
    date: '2025-08-21',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.forbes.com/' // sample link
  }
];

}
