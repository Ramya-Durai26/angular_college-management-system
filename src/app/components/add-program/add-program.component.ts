import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // 1. Import Router
import { ProgramService } from '../services/program.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-program',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './add-program.component.html',
  styleUrl: './add-program.component.css'
})
export class AddProgramComponent {
  private programService = inject(ProgramService);
  private router = inject(Router); // 2. Inject Router

  newProgramName = '';
  newProgramDuration = '';

  saveProgram() {
    if (this.newProgramName && this.newProgramDuration) {
      // 3. Add to your service
 //     this.programService.addProgram({
 //       id: Date.now(), // Simple way to generate an ID
  //      name: this.newProgramName,
 //       duration: this.newProgramDuration
 //     }); 

      // 4. Navigate back to the list automatically
      this.router.navigate(['/programs']);
    }
  }
}