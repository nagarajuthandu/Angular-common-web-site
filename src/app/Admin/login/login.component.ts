import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private sessionService : SessionService) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.sessionService.setLoggedIn(true);
      this.router.navigate(['/admin/products']);
    } 
  }
}
