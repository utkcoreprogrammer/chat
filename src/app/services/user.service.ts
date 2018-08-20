import { Observable } from "rxjs/Rx";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()

export class UserService {
  private baseUrl:string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  register(user: any) {
    console.log("inside user service" , user);
    return this.http.post<any>(`${this.baseUrl}/user/register`, user);        
  }       
}

