import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from '../../config/config';
import { User } from 'src/app/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient
  ) { }

  // ================================================
  // CREAR UN USUARIO 
  // ================================================
  saveUser( user: User ) {
    let url = URL_BACKEND + '/user';
    
    return this.http.post(url, user);
  }
}
