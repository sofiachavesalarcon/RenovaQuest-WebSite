import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  SignUpObj: SignUp;
  constructor(private http: HttpClient, private router:Router){
    this.SignUpObj = new SignUp();
  }
  OnSignUp(){
    this.http.post('http://www.api-rest.somee.com/api/user', this.SignUpObj)
    .pipe(
      catchError((error: HttpErrorResponse)=>{
        alert("Registration failed");
        return throwError("Username o Contraseña Incorrecto")
      })
    )
    .subscribe((res:any)=>{
    if(res){
        alert("registro exitoso")
        this.router.navigateByUrl('/login')
      }
    })

  }
}




export class SignUp {
  Username: string;
  Email: string;
  Password:string;
  Image: string;
  constructor(){
    this.Username = '';
    this.Email = '';
    this.Password = '';
    this.Image = '';

  }
}
