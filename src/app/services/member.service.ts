import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Member } from '../models/member';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl='api/members';
  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.apiUrl);
  }

  getMemberById(id:number):Observable<Member>{
    const url=this.apiUrl+'/'+id;
    return this.http.get<Member>(url).pipe(
      catchError((error: HttpErrorResponse)=>{
        console.error('An error occured',error);
        return throwError('Error fetching')
      })
    );
  }
  
  addMember(member: Member):Observable<Member>{
    return this.http.post<Member>(this.apiUrl,member);
  }
}
