import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person', // Or your custom selector
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  people$!: Observable<Person[]>;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.people$ = this.personService.getPersonList();
  }
}
