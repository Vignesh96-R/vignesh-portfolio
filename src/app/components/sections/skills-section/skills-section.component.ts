import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  dataScienceSkills: SkillCategory[] = [
    {
      category: 'Programming Languages',
      icon: 'code',
      skills: ['SQL' ,'Python'],
    },
    {
      category: 'Libraries & Frameworks',
      icon: 'brain-circuit',
      skills: ['NumPy', 'Pandas' ,'Scipy', 'Scikit-learn', 'TensorFlow (basic)', 'FastAPI'],
    },
     {
      category: 'Visualization',
      icon: 'presentation',
      skills: ['Excel', 'Matplotlib', 'Seaborn', 'Power BI'  ],
    },
    {
      category: 'Machine Learning',
      icon: 'bot',
      skills: ['Regression', 'Classification', 'SVM', 'Decision Trees', 'Time Series', 'Recommender Systems'],
    },
    {
      category: 'Deployment',
      icon: 'cloud',
      skills: ['Docker', 'Kubernetes', 'MLflow', 'MLOps', 'ACI', 'AKS'],
    },
    {
      category: 'Azure Cloud',
      icon: 'database',
      skills: ['Storage Account', 'SQL DB', 'ML Studio', 'Data Factory', 'DataBricks', 'Synapse Analytics', 'Fabric'], 
    },
     {
      category: 'Version Control',
      icon: 'monitor-smartphone',
      skills: ['Git', 'SVN'],
    },
    {
      category: 'IDEs & Platforms',
      icon: 'monitor-smartphone',
      skills: ['Jupyter', 'VS Code', 'Google Colab', 'Github'],
    },
  ];

  developerSkills: SkillCategory[] = [
     {
      category: 'Programming Languages',
      icon: 'code',
      skills: ['Java', 'Kotlin', 'JavaScript', 'Python'],
    },
    {
      category: 'Mobile App Development',
      icon: 'smartphone',
      skills: ['React Native', 'Ionic Native', 'Android Native'],
    },
    {
      category: 'Web App Development',
      icon: 'globe',
      skills: ['React.js', 'Angular.js'],
    },
    {
      category: 'Backend',
      icon: 'server',
      skills: ['Node.js', 'Spring Boot', 'FastAPI'],
    },
    {
      category: 'UI/UX',
      icon: 'ui_ux',
      skills: ['Figma', 'Inkscape'],
    },
  ];

  getIconPath(icon: string): string {
    const iconPaths: { [key: string]: string } = {
      code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      'brain-circuit': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      bot: 'M9 3h6m-3 0v3m0 12v3m3-3h3m-12 0H3m3 0v-3m0-6V6m12 0v3m0 6v3M7 7h10v10H7V7z',
      cloud: 'M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z',
      database: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      presentation: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      'monitor-smartphone': 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      smartphone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      globe: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      server: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      'ui_ux': 'M19.428 2.572a2 2 0 0 1 0 2.828l-2.12 2.12-3.535-3.535 2.12-2.12a2 2 0 0 1 2.828 0zm-3.535 3.535L4 18.001V20h1.999l11.893-11.893-3.535-3.535z',
    };
    return iconPaths[icon] || '';
  }
}
