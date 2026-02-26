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
  newStatus: "Active" | "Inactive" = 'Active';

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
        this
      }
    }
  }


  saveProgram() {
  console.log('Save button clicked!');
  
  if (this.isEditMode && this.editId !== null) {
    // Update existing
    this.programService.updateProgram({
      id: this.editId,
      name: this.newProgramName,
      description: this.newProgramDescription, 
      status: this.newStatus
    }); 
  } else {
    // Add new
    this.programService.addProgram({
      id: Date.now(),
      name: this.newProgramName,
      description: this.newProgramDescription, 
      status: 'Active'
    }); 
  }

  // 4. MOVE THIS HERE (Outside the brackets)
  this.router.navigate(['/programs']);
  }
}