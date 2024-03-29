import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from '../models/member';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const members:Member[]=[
      {id:1, name:'John Doe', email:'john@example.com', address:'Bangalore'},
      {id:2, name:'Jane Smith', email:'jane@example.com', address:'America'}
    ];
    return {members};
   }
}
