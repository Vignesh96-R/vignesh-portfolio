import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string;
  skills: string[];
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss'
})
export class ExperienceSectionComponent {
  experienceData: ExperienceItem[] = [
    {
      role: 'Freelance Developer (1 yr)',
      company: 'Self-employed',
      period: 'Oct 2024 - Present',
      details: 'Building apps for online tutoring and hostel management, and providing remote client support via Zoom.',
      skills: ['Angular', 'React', 'Android native', 'Spring Boot', 'Node.js'],
    },
    {
      role: 'Mobile APP developer (1 yr 9 mos)',
      company: 'Mavens I Softech Solutions Pvt Ltd',
      period: 'Dec 2022 - Sep 2024',
      details: 'Developed Android mobile apps for service and business applications. Worked closely with product managers and testers to meet agile sprint goals.',
      skills: ['Android Native','Java', 'Kotlin', 'Agile', 'Product Management'],
    },
    {
      role: 'Independent Agriculture & Farming',
      company: 'Self-managed',
      period: 'Apr 2021 - Nov 2022',
      details: 'Managed daily farm operations including planting, harvesting, labor coordination, and crop sales, building strong discipline and business planning skills.',
      skills: ['Farming', 'Management', 'Business Planning'],
    },
    {
      role: 'Assemble Operator (1 yr 4 mos)',
      company: 'NCR Corporation Pvt Ltd',
      period: 'July 2018 - Nov 2019',
      details: 'Assembled ATM components based on standard operating procedures in a production line environment.',
      skills: ['Assembly', 'Quality Control'],
    },
  ];
}
