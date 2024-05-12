import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;
  constructor(private http: HttpClient, private router:Router){
    this.loginObj = new Login();
  }
  onLogin(){
    this.http.post('http://www.api-rest.somee.com/api/user/login', this.loginObj)
    .pipe(
      catchError((error: HttpErrorResponse)=>{
        alert("Username or Password Incorrect");
        return throwError("Username or Password Incorrect")
      })
    )
    .subscribe((res:any)=>{
    if(res){
        alert("Login Success")
        this.router.navigateByUrl('/dashboard')
      }
    })
  }
}

export class Login {
  Username: string;
  Password:string;
  constructor(){
    this.Username = '';
    this.Password = '';
  }
}
