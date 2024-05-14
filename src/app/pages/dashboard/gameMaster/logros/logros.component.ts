import { NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [NgFor, UpperCasePipe, HttpClientModule],
  templateUrl: './logros.component.html',
  styleUrl: './logros.component.css'
})
export class LogrosComponent {
  user: any;
  Badges: any = [];

  constructor(private http: HttpClient) {
    this.user = this.ObtenerUsuario();

    this.http.get('http://www.api-rest.somee.com/api/badge').subscribe(data => {
      this.Badges = data;
      this.Badges = this.Badges.filter((item: any) => item.userId === this.user.userId)

      this.Badges.map((item: any) => {
        if (item.completed) {
          item.completed = 'Completed';
        }
      });


      console.log(this.Badges);
    });

  }


  ObtenerUsuario() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
