import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  company: string;
  description: string;
}

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications-section.component.html',
  styleUrl: './certifications-section.component.scss'
})
export class CertificationsSectionComponent {
  certifications: Certification[] = [
    {
      title: 'DP-900: Azure Data Fundamentals',
      company: 'Microsoft',
      description: 'Demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.'
    },
    // {
    //   title: 'DP-100: Azure Data Scientist Associate',
    //   company: 'Microsoft',
    //   description: 'Validated expertise in applying data science and machine learning to implement and run machine learning workloads on Azure.'
    // }
  ];

  getIconPath(): string {
    // Certificate/award icon (simple outline)
    return 'M17 17v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m14 0a2 2 0 002 2m-2-2a2 2 0 01-2 2m-6-2a2 2 0 01-2 2m2-2a2 2 0 002 2m0-10V7a4 4 0 118 0v2';
  }
}
