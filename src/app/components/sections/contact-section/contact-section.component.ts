import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactCard {
  icon: string;
  title: string;
  description: string;
  value: string;
  link: string;
  valueClass?: string;
}

interface SocialLink {
  icon: string;
  label: string;
  link: string;
  bgColor: string;
  svgPath: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  contactCards: ContactCard[] = [
    {
      icon: 'mail',
      title: 'Email',
      description: 'For any inquiries, please email me at:',
      value: 'vignesh1996rajendran@gmail.com',
      link: 'mailto:vignesh1996rajendran@gmail.com',
      valueClass: 'text-green-600'
    }
  ];

  socialLinks: SocialLink[] = [
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/rr-vignesh',
      bgColor: 'bg-blue-600',
      svgPath: '/svg/connect/linkin.svg'
    },
    {
      icon: 'github',
      label: 'GitHub',
      link: 'https://github.com/Vignesh96-R',
      bgColor: 'bg-white',
      svgPath: '/svg/connect/github.svg'
    },
    {
      icon: 'stack-overflow',
      label: 'Stack Overflow',
      link: 'https://stackoverflow.com/users/20336918/vignesh',
      bgColor: 'bg-white',
      svgPath: '/svg/connect/stackoverflow.svg'
    }
  ];

  getIconPath(icon: string): string {
    const iconPaths: { [key: string]: string } = {
      mail: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      phone: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      linkedin: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z',
      github: 'M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.577.688.48A10.025 10.025 0 0022 12.021C22 6.484 17.523 2 12 2z',
      'stack-overflow': 'M17.473 19.294v-4.118h1.176v5.294H5.353v-5.294h1.176v4.118h10.944zm-8.824-1.176h6.706v-1.176H8.649v1.176zm.235-2.059l6.573 1.353.242-1.172-6.573-1.353-.242 1.172zm1.06-2.118l6.073 2.824.485-1.048-6.073-2.824-.485 1.048zm2.12-2.059l5.059 4.706.824-.883-5.059-4.706-.824.883z'
    };
    return iconPaths[icon] || '';
  }
}
