import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  type: string;
  status?: 'completed' | 'in-progress' | 'planned';
  progress?: number; // 0-100 for progress bar
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  selectedFilter: string = 'all'; // 'all', 'DS', '</>'
  
  allProjects: Project[] = [
     {
      title: 'Portfolio Website',
      description: 'A modern single-page portfolio showcasing projects, skills, and experience with a clean, responsive design and smooth user interactions.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      image: 'https://placehold.co/600x400',
      type: '</>',
      link: 'https://github.com/Vignesh96-R/vignesh-portfolio',
      status: 'completed'
    },
    {
      title: 'File Management App',
      description: 'A smart file management app that allows users to store, organize, and set reminders for important documents with offline support and sync capabilities.',
      technologies: ['Android Native', 'Jetpack', 'Kotlin', 'Firebase', 'SqlLite-Room'],
      image: 'https://placehold.co/600x400',
      type: '</>',
      link: 'https://github.com/Vignesh96-R/CloudMediaBox',
      status: 'completed'
    },
    {
      title: 'Stock Price Prediction with LSTM',
      description: 'A deep learning model that analyzes historical stock data to predict future market trends using sequential pattern recognition.',
      technologies: ['LSTM', 'Time-series', 'TensorFlow', 'Keras', 'Matplotlib'],
      image: 'https://placehold.co/600x400',
      type: 'DS',
      link: 'https://github.com/Vignesh96-R/LSTM_predicition',
      status: 'completed'
    },
    {
    title: 'AI-Powered Chatbot with NLP',
    description: 'Built an intelligent chatbot using transformers for intent classification and contextual understanding. Integrated with Rasa and Hugging Face models for accurate dialogue handling.',
    technologies: ['BERT', 'GPT', 'Transformers', 'Rasa', 'Hugging Face'],
    image: 'https://placehold.co/600x400',
    type: 'DS',
    link: 'https://github.com/Vignesh96-R/chatbot-nlp',
    status: 'completed'
  },
  {
    title: 'Real-Time Object Detection',
    description: 'Implemented YOLOv5 with OpenCV to detect and track objects in real-time traffic and CCTV video feeds, achieving low-latency performance in live environments.',
    technologies: ['YOLOv5', 'OpenCV', 'Python', 'Real-time Streaming'],
    image: 'https://placehold.co/600x400',
    type: 'DS',
    link: 'https://github.com/Vignesh96-R/yolo-object-detection',
    status: 'in-progress',
    progress: 75
  },
  {
    title: 'End-to-End ML Web App',
    description: 'Developed a full-stack machine learning app with classification/regression capabilities, deployed using Streamlit and Docker on Azure for scalable access.',
    technologies: ['Streamlit', 'FastAPI', 'Docker', 'Azure', 'Python'],
    image: 'https://placehold.co/600x400',
    type: 'DS',
    link: 'https://github.com/Vignesh96-R/ml-web-app',
    status: 'completed'
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

  get projects(): Project[] {
    if (this.selectedFilter === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter(project => project.type === this.selectedFilter);
  }

  filterProjects(filter: string): void {
    this.selectedFilter = filter;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'planned': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'completed': return 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
      case 'in-progress': return 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z';
      case 'planned': return 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z';
      default: return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
    }
  }

  getExternalLinkIcon(): string {
    // External link icon SVG path
    return 'M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h3v3m-11 8 9-9';
  }
}
