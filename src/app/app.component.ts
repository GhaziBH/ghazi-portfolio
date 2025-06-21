import { SkillsComponent } from './sections/skills/skills.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ContactComponent } from './sections/contact/contact.component';
import { Component, AfterViewInit, HostListener } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ProfileComponent } from './sections/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ProfileComponent,
    SkillsComponent,
    CertificationsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
 
  scrolled = false;

  // Listen to window scroll events to update 'scrolled' property
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  // After the view is initialized, set up the intersection observer for fade-in animations
  ngAfterViewInit(): void {
    const faders = document.querySelectorAll('.fade-in');
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;       // If not visible, do nothing
        entry.target.classList.add('visible');   // Add class to trigger CSS animation
        observer.unobserve(entry.target);        // Stop observing once visible
      });
    }, options);

    // Start observing each element with class 'fade-in'
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }
}
