import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Check this path!
import { AppComponent } from './app/app.component'; // Check this path!

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));