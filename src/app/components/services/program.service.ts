import { Injectable, signal } from '@angular/core';
import { Program } from '../../models/program.model';

@Injectable({ providedIn: 'root' })
export class ProgramService {
  // Using Signals (Angular 2026 Best Practice) for reactive data
  private programsList = signal<Program[]>([
    {
      id: 1, name: 'Computer Science', description: 'B.Tech in CS', status: 'Active',
      duration: ''
    },
    {
      id: 2, name: 'Mechanical Engineering', description: 'B.Tech in ME', status: 'Active',
      duration: ''
    }
  ]);

  getPrograms() { return this.programsList.asReadonly(); }

addProgram(newProgram: Program) {
  this.programsList.update(current => [...current, newProgram]);
}

  updateProgram(updatedProgram: Program) {
    this.programsList.update(list => 
      list.map(p => p.id === updatedProgram.id ? updatedProgram : p)
    );
  }

  deleteProgram(id: number) {
    this.programsList.update(list => list.filter(p => p.id !== id));
  }
  
}