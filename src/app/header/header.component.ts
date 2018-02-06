import {Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../css/trello.css', '../../css/normalize.css', '../../css/foundation.min.css']
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AuthService) { }

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }
}
