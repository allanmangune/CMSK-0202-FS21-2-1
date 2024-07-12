/**
 * Represents the PersonComponent class.
 * This component is responsible for displaying a list of people.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person', 
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  /**
   * Represents an observable of an array of Person objects.
   */
  people$!: Observable<Person[]>;

  constructor(private personService: PersonService) {}

  /**
   * Initializes the component.
   * Retrieves the list of people from the PersonService.
   */
  ngOnInit() {
    this.people$ = this.personService.getPersonList();
  }
}
