import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/services.index';
import { User } from '../../models/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public router: Router,
    public userService: UserService,
    
    ) { }

  ngOnInit(): void {

   
  }


  ingresar(forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    let user = new User(null, null, null, null, forma.value.email, forma.value.password, null );
    this.userService.login(user).subscribe( correcto => this.router.navigate(['/']) );
    
    
   
  }



}
