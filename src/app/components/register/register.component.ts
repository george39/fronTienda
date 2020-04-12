import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  public user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.user = new User('', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('registro');
  }

}
