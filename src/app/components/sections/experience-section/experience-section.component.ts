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
      role: 'Mern Stack Developer (1 yrs)',
      company: 'ABC',
      period: 'Sep 2024 - Aug 2025',
      details: 'Designed and built a PG Management System (MERN).\n Implemented tenant onboarding, room allocation, and vacancy management.\n Added fee invoicing, payment tracking, fines, and refunds workflows.\n Built complaint management with status tracking and admin SLAs.\n Implemented role-based access for Admin, Manager, Staff, and Tenant.\n Integrated JWT auth, validations, and secure APIs with Node.js & Express.',
      skills: [  'React Native', 'Tailwind',  'Node.js',   'Express.js',   'MongoDB',  'JavaScript',   'TypeScript',     'GraphQL',    'Git',   'CI/CD',  'Firebase']

    },
    {
      role: 'Full Stack Developer  (1 yrs 8 mos)',
      company: 'Mavens I Softech Solutions Pvt Ltd',
      period: 'Dec 2022 - Aug 2024',
      details: 'Led development of Iksana (Welldercare), a health & care platform for older adults.\n Built seamless onboarding, subscriptions, real-time health insights, and safety features.\n Delivered end-to-end mobile app using React Native, Node.js, Express, MongoDB, Firebase.\n Published to Play Store: https://play.google.com/store/apps/details?id=com.welldercare.com&hl=en_IN\n Built Iksana Vital Scan in Android Native using an AI .pkl model for live vitals and pulse detection via camera',
      skills: ['Android Native (XML)','React Native', 'Node.js', 'Express.js','Mango DB', 'Docker', 'Java Script', 'Type Script'],
    },
    {
      role: 'React Native developer (2 yrs 4 mos)',
      company: 'XXXXX',
      period: 'Aug 2020 - Nov 2022',
      details: 'Built Team11, a fantasy sports fan engagement app.\n Implemented Daily Fantasy Sports gameplay, real-time match updates, content wall, and quizzes.\n Delivered React Native app with secure auth, state management, and in-app engagement features.',
      skills: ['React Native', 'React.js', 'JS & TS', 'Firebase Push Notification'],
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
