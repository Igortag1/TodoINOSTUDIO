import {Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../css/trello.css']
})

export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}
  goPhone() {
    this.router.navigate(['authphone']);
  }

  ngOnInit() {}
  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
