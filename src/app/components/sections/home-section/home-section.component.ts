import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WhatIDo {
  icon: string;
  title: string;
  description: string;
  skills: { name: string; svgPath: string }[];
}

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss'
})
export class HomeSectionComponent {
  whatIDo: WhatIDo[] = [
    {
      icon: 'database',
      title: 'Data Scientist',
      description: 'I build predictive models and analyze complex datasets to uncover insights and drive business decisions.',
      skills: [
        { name: 'Python', svgPath: '/svg/datascience/python.svg' },
        { name: 'Tensorflow', svgPath: '/svg/datascience/Tensorflow.svg' },
        { name: 'Keras', svgPath: '/svg/datascience/keras.svg' },
        // { name: 'Azure', svgPath: '/svg/datascience/azure.svg' },
      ],
    },
    {
      icon: 'smartphone',
      title: 'Developer',
      description: 'I create robust, scalable, and efficient full-stack web and mobile applications with modern technologies.',
      skills: [
        { name: 'Android Native', svgPath: '/svg/developer/android.svg' },
        { name: 'React', svgPath: '/svg/developer/react.svg' },
        { name: 'Angular', svgPath: '/svg/developer/angular.svg' },
        { name: 'Spring Boot', svgPath: '/svg/developer/springboot.svg' },
        // { name: 'Node.js', svgPath: '/svg/developer/node.svg' },
      ],
    },
    {
      icon: 'cloud',
      title: 'UI/UX Designer',
      description: 'I design intuitive and engaging user interfaces that provide a seamless user experience.',
      skills: [
        { name: 'Figma', svgPath: '/svg/ui_ux/figma.svg' },
        { name: 'Inkscape', svgPath: '/svg/ui_ux/inkscape.svg' },
      ],
    },
  ];

  getIconPath(icon: string): string {
    const iconPaths: { [key: string]: string } = {
      database: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      smartphone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      cloud: 'M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z'
    };
    return iconPaths[icon] || '';
  }
}
