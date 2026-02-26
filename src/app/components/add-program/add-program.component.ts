import { Component, inject,OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // 1. Import Router
import { ProgramService } from '../services/program.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-program',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './add-program.component.html',
  styleUrl: './add-program.component.css'
})

export class AddProgramComponent implements OnInit {
  isEditMode = false;
  editId: number | null = null;


  newProgramName = '';
  newProgramDescription = '';
  newProgramDuration = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private programService: ProgramService
  ) {}

  ngOnInit() {
    // 1. Get the ID from the URL
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.isEditMode = true;
      this.editId = Number(idParam);
      
      // 2. Ask the service for the data
      const existingProgram = this.programService.getProgramById(this.editId);
      
      // 3. PRE-POPULATE the fields!
      if (existingProgram) {
        this.newProgramName = existingProgram.name;
        this.newProgramDescription = existingProgram.description;
      }
    }
  }


  saveProgram() {
    if (this.newProgramName && this.newProgramDuration) {
      
     this.programService.addProgram({
        id: Date.now(), // Simple way to generate a unique ID
        name: this.newProgramName,
       description: this.newProgramDescription, 
      status: 'Active'
     }); 

      // 4. Navigate back to the list automatically
      this.router.navigate(['/programs']);
    }
  }
}