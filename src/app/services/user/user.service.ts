import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from '../../config/config';
import { User } from 'src/app/models/user.models';
// import { map } from "rxjs/operators";
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.cargarStorage();
   }

  logout() {
    this.user = null;
    this.token = '';

    localStorage.clear();
    this.router.navigate(['/login']);
  }

  estaLogueado() {
    return (this.token.length > 5 ) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }


  /****************************************************************
  LOGIN DE USUARIO
  **************************************************************** */
  login(user: User) {

    let url = URL_BACKEND + '/login';
    return this.http.post(url, user)
                .map((resp: any) => {
                  localStorage.setItem('id', resp.id);
                  localStorage.setItem('token', resp.token);
                  localStorage.setItem('usuario', JSON.stringify(resp.token));

                  return true;
                });
  }



  // ================================================
  // CREAR UN USUARIO 
  // ================================================
  saveUser( user: User ) {
    let url = URL_BACKEND + '/usuario';
    
    return this.http.post(url, user);
  }
}
