import { Component } from '@angular/core';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeSectionComponent } from './components/sections/home-section/home-section.component';
import { SkillsSectionComponent } from './components/sections/skills-section/skills-section.component';
import { EducationSectionComponent } from './components/sections/education-section/education-section.component';
import { ExperienceSectionComponent } from './components/sections/experience-section/experience-section.component';
import { ProjectsSectionComponent } from './components/sections/projects-section/projects-section.component';
import { CertificationsSectionComponent } from './components/sections/certifications-section/certifications-section.component';
import { ContactSectionComponent } from './components/sections/contact-section/contact-section.component';
import { CodingProfilesSectionComponent } from './components/sections/coding-profiles-section/coding-profiles-section.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeSectionComponent,
    SkillsSectionComponent,
    EducationSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    CertificationsSectionComponent,
    ContactSectionComponent,
    CodingProfilesSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
