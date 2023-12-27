import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  credentials:any={}

  constructor(private router: Router, private sessionService : SessionService,private authService: AuthService) {}

  ngOnInit():void{
    this.authService.logout()
  }
  
  login():void {
    this.credentials.username =this.username
    this.credentials.password =this.password
    this.authService.login(this.credentials).subscribe(() => {
      this.authService.isAuthenticated()
      {
        this.router.navigate(['/admin/products']);
      }
    });
  }
}
