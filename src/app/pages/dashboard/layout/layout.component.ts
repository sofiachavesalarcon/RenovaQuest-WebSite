import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet,],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  user: any;

  constructor(private router: Router) {
    this.user = this.ObtenerUsuario();
    if (this.user.image) {
      this.user.image = 'https://www.w3schools.com/howto/img_avatar.png';
    }
  }
  Salir() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  ObtenerUsuario() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

}
