import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  SignUpObj: SignUp;
  constructor(private http: HttpClient, private router: Router) {
    this.SignUpObj = new SignUp();
  }

  OnSignUp() {
    if (this.SignUpObj.Email != '' && this.SignUpObj.Username != '' && this.SignUpObj.Password != '' && this.SignUpObj.Image != '') {
      this.http.post('https://www.api-rest.somee.com/api/user', this.SignUpObj)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            alert("Registration failed");
            return "Registration failed";
          })
        )
        .subscribe((res: any) => {
          if (res) {
            alert("You're all signed up!")
            this.router.navigateByUrl('/login')
          }
        })
    } else {
      alert('All fields are required')
    }


  }
}




export class SignUp {
  Username: string;
  Email: string;
  Password: string;
  Image: string;
  constructor() {
    this.Username = '';
    this.Email = '';
    this.Password = '';
    this.Image = '';

  }
}
