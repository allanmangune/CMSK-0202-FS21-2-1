import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Person } from '../models/person.model'; 


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = '/assets/person.json'; 

  constructor(private http: HttpClient) {} 

  getPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }
}
