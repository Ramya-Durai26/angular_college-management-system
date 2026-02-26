import { Routes } from '@angular/router';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { AddProgramComponent } from './components/add-program/add-program.component';

export const routes: Routes = [
  // This makes the Program List the "Home Page"
  { path: '', component: ProgramListComponent }, 
  { path: 'programs', component: ProgramListComponent },
  { path: 'add-program', component: AddProgramComponent } 
];