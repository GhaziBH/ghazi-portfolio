import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ nécessaire pour *ngFor

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // ✅ AJOUT ici
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'] // ✅ "styleUrls" avec un "s"
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Gestion Monétique',
      desc: 'App de gestion des cartes et transactions',
      image: 'assets/proj1.png',
      link: 'https://github.com/ghazi/project1'
    },
    {
      name: 'Plateforme RH',
      desc: 'Suivi des employés, congés et contrats',
      image: 'assets/proj2.png',
      link: 'https://github.com/ghazi/project2'
    }
  ];
}
