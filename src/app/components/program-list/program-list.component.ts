import { Component, inject, signal } from '@angular/core';
import { ProgramService } from '../services/program.service';
import { Program } from '../../models/program.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-program-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.css'
})
export class ProgramListComponent {
  private programService = inject(ProgramService);
  programs = this.programService.getPrograms();

  showForm = signal(false);
  isEditing = signal(false);

  // Form Model
  currentProgram: Program = { id: 0, name: '', description: '', duration:'', status: 'Active' };

  openAddForm() {
    this.currentProgram = { id: 0, name: '', description: '', duration:'', status: 'Active' };
    this.isEditing.set(false);
    this.showForm.set(true);
  }

  editProgram(program: Program) {
    this.currentProgram = { ...program };
    this.isEditing.set(true);
    this.showForm.set(true);
  }

  saveProgram() {
    if (this.isEditing()) {
      this.programService.updateProgram(this.currentProgram);
    } else {
      this.programService.addProgram(this.currentProgram);
    }
    this.showForm.set(false);
  }

  deleteProgram(id: number) {
    if (confirm('Are you sure you want to delete this program?')) {
      this.programService.deleteProgram(id);
    }
  }
}