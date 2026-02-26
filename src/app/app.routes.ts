import { Routes } from '@angular/router';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { AddProgramComponent } from './components/add-program/add-program.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programs', component: ProgramListComponent },
  { path: 'add-program', component: AddProgramComponent },
  { path: 'edit-program/:id', component: AddProgramComponent } 
];