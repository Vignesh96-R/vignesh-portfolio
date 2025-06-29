import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  type: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  projects: Project[] = [
     {
      title: 'Portfolio Website (MIT Lic.)',
      description: 'A modern single-page portfolio showcasing projects, skills, and experience with a clean, responsive design and smooth user interactions.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      image: 'https://placehold.co/600x400',
      type: '</>',
      link: 'https://github.com/Vignesh96-R/vignesh-portfolio'
    },
    {
      title: 'File Management App',
      description: 'A smart file management app that allows users to store, organize, and set reminders for important documents with offline support and sync capabilities.',
      technologies: ['Android Native', 'Jetpack', 'Kotlin', 'Firebase', 'SqlLite-Room'],
      image: 'https://placehold.co/600x400',
      type: '</>',
      link: 'https://github.com/Vignesh96-R/CloudMediaBox'
    },
    {
      title: 'LSTM Stock Predictor',
      description: 'A deep learning model that analyzes historical stock data to predict future market trends using sequential pattern recognition.',
      technologies: ['Android Native', 'Jetpack', 'Kotlin', 'Firebase', 'SqlLite-Room'],
      image: 'https://placehold.co/600x400',
      type: 'DS',
      link: 'https://github.com/Vignesh96-R/vignesh-portfolio'
    },
    // {
    //   title: 'E-commerce Analytics Dashboard',
    //   description: 'A web application for visualizing sales data and predicting customer churn using machine learning.',
    //   technologies: ['React', 'Next.js', 'Tailwind CSS', 'Scikit-learn', 'D3.js'],
    //   image: 'https://placehold.co/600x400',
    //   link: '#'
    // },
    // {
    //   title: 'Real-time Chat Application',
    //   description: 'A full-stack chat application with end-to-end encryption and real-time messaging capabilities.',
    //   technologies: ['Node.js', 'Express', 'Socket.IO', 'React', 'MongoDB'],
    //   image: 'https://placehold.co/600x400',
    //   link: '#'
    // },
    // {
    //   title: 'Portfolio Website Builder',
    //   description: 'A CMS-like platform for users to create and deploy their own professional portfolio websites with ease.',
    //   technologies: ['Vue.js', 'Nuxt.js', 'Firebase', 'Stripe API'],
    //   image: 'https://placehold.co/600x400',
    //   link: '#'
    // }
  ];

  getExternalLinkIcon(): string {
    // External link icon SVG path
    return 'M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h3v3m-11 8 9-9';
  }
}
