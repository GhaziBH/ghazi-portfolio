import { Routes } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ContactComponent } from './sections/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
];
