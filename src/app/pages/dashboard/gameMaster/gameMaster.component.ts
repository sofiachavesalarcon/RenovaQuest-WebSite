import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-game-master',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './gameMaster.component.html',
  styleUrl: './gameMaster.component.css'
})
export class GameMasterComponent {

  user: any;
  constructor() {
    this.user = this.ObtenerUsuario();
    if (this.user.image) {
      this.user.image = 'https://www.w3schools.com/howto/img_avatar.png';
    }
  }


  ObtenerUsuario() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
