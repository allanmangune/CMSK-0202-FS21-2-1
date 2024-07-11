import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Person } from '../models/person.model'; 

/**
 * Service for managing person data.
 */
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = '/assets/person.json'; 

  constructor(private http: HttpClient) {} 

  /**
   * Retrieves a list of persons.
   * @returns An Observable that emits an array of Person objects.
   */
  getPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }
}
