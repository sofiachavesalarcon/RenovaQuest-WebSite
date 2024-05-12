import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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
    this.http.post('http://www.api-rest.somee.com/api/user', this.SignUpObj) .subscribe((res:any)=>{

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
