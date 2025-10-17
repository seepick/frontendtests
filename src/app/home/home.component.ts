import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  persons: Person[] = [];
  personService: PersonService = inject(PersonService);
  applyForm = new FormGroup({
    searchTerm: new FormControl('')
  });
  resultText: string = 'No search performed yet.';
  constructor() {
    this.persons = this.personService.getAllPersons();
  }
  submitApplication() {
    this.resultText = 'searched for: ' + this.applyForm.value.searchTerm;
    this.personService.doSearch(
      this.applyForm.value.searchTerm ?? ''
    );
  }
}
