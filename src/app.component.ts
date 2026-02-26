import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // Add RouterLinkActive here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // And add it here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CMS';
}