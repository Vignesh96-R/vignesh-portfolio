import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CodingProfile {
  platform: string;
  icon: string; // SVG path or image
  url: string;
  stats: string;
  description: string;
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
      platform: 'LeetCode',
      icon: '/svg/connect/leetcode.svg', // Placeholder, update if you have a LeetCode SVG
      url: '[Your LeetCode URL]',
      stats: '350+ problems solved, mostly in Algorithms & SQL',
      description: 'Actively solving algorithmic and database challenges to strengthen problem-solving skills and prepare for technical interviews.'
    },
    {
      platform: 'HackerRank',
      icon: '/svg/connect/hackerrank.svg', // Placeholder, update if you have a HackerRank SVG
      url: '[Your HackerRank URL]',
      stats: 'Certified in Python and SQL, 5-star in Problem Solving',
      description: 'Earned certifications and top ratings by tackling a wide range of coding problems and participating in contests.'
    },
    {
      platform: 'Kaggle',
      icon: '/svg/connect/kaggle.svg', // Placeholder, update if you have a Kaggle SVG
      url: '[Your Kaggle URL]',
      stats: '2 bronze medals, participated in 8 competitions, contributor to datasets',
      description: 'Engaged in data science competitions, contributed datasets, and collaborated with the global data community.'
    }
  ];
} 