import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CodingProfile {
  platform: string;
  icon: string; // SVG path or image
  url: string;
  stats: string;
  description: string;
  chips?: string[]; // Add chips for skills or badges
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
    // {
    //   platform: 'LeetCode',
    //   icon: '/svg/connect/leetcode.svg', // Placeholder, update if you have a LeetCode SVG
    //   url: '[Your LeetCode URL]',
    //   stats: '350+ problems solved, mostly in Algorithms & SQL',
    //   description: 'Actively solving algorithmic and database challenges to strengthen problem-solving skills and prepare for technical interviews.'
    // },
    {
      platform: 'HackerRank',
      icon: '/hackerrank.png', // Updated to use the actual PNG image
      url: 'https://www.hackerrank.com/profile/vigneshrajendran',
      stats: 'Certified in Python and SQL, 5-star in Problem Solving',
      description: 'Earned certifications and top ratings by tackling a wide range of coding problems and participating in contests.',
      chips: ['Python', 'SQL']
    },
    {
      platform: 'Kaggle',
      icon: '/kaggle.png', // Updated to use the actual PNG image
      url: 'https://www.kaggle.com/vignesh6r6r',
      stats: '2 bronze medals, participated in 8 competitions, contributor to datasets',
      description: 'Engaged in data science competitions, contributed datasets, and collaborated with the global data community.'
    }
  ];
} 