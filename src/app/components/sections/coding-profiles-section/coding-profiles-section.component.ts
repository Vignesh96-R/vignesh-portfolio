import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CodingProfile {
  platform: string;
  icon: string; 
  url: string;
  stats: string;
  description: string;
  chips?: string[]; 
}

@Component({
  selector: 'app-coding-profiles-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coding-profiles-section.component.html',
  styleUrl: './coding-profiles-section.component.scss'
})
export class CodingProfilesSectionComponent {
  profiles: CodingProfile[] = [
    {
      platform: 'HackerRank',
      icon: '/hackerrank.png', 
      url: 'https://www.hackerrank.com/profile/vigneshrajendran',
      stats: 'Certified in Python and SQL, 5-star in Problem Solving',
      description: 'Earned certifications and top ratings by tackling a wide range of coding problems and participating in contests.',
      chips: ['Python', 'SQL']
    },
    {
      platform: 'Kaggle',
      icon: '/kaggle.png',
      url: 'https://www.kaggle.com/vignesh6r6r',
      stats: '2 bronze medals, participated in 8 competitions, contributor to datasets',
      description: 'Engaged in data science competitions, contributed datasets, and collaborated with the global data community.'
    }
  ];
} 