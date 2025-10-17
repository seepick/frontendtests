import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  persons: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];
  getAllPersons(): Person[] {
    return this.persons;
  }
  doSearch(term: string): void {
    console.log(`Searching for persons with term: [${term}]`);
    // Implement search logic here
    this.persons = [];
  }
}