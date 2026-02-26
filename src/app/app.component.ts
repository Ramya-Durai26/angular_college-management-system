import { Component } from '@angular/core';
import { RouterOutlet, RouterLink,RouterLinkActive } from '@angular/router'; 
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive], 
template: `
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a> | 
      <a routerLink="/programs" routerLinkActive="active">Programs</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'CMS';
  public readonly homeLinkActiveOptions = { exact: true };
}