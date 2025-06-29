import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss'
})
export class EducationSectionComponent {
  educationData: EducationItem[] = [
    {
      degree: 'Data Science',
      institution: 'Intellipaat Software Solutions Pvt. Ltd',
      period: 'Oct 2024 - Jun 2025',
      details: 'Covered full-stack data science from data cleaning and EDA to model building and deployment with real-world project experience. Skilled in Python, ML, Time Series, Recommendation Systems, and NLP using tools like Pandas, Scikit-learn, and Seaborn.',
    },
    {
      degree: 'Post Graduation Diploma Course',
      institution: 'National Power Training Institute',
      period: 'Feb 2020 - Feb 2021',
      details: 'Completed a full-time training program focused on thermal power plant systems, operation, maintenance, and energy efficiency.',
    },
    {
      degree: 'B.E, Mechanical Engineering',
      institution: 'Arunai Engineering College',
      period: 'July 2014 - Mar 2018',
      details: 'Built a strong foundation in engineering principles, thermodynamics, and applied mathematics, fostering problem-solving and analytical thinking useful in technical and data-driven roles.',
    },
  ];
}
