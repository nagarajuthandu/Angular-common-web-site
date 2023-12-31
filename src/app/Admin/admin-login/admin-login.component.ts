import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  email: string = '';
  confirmPassword: string=''
  firstName: string=''
  lastName:string=''

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
        this.router.navigate(['/admin/dashboard']);
      }
    });
  }

  register():void{
    let user:any = {}
    user.username = this.username
    user.password = this.password
    user.firstName = this.firstName
    user.lastName = this.lastName
    user.email = this.email
    this.authService.createUser(user).subscribe()
  }
}
