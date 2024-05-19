import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InfoService } from '../../../services/info.service';

@Component({
  selector: 'app-game-master',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './gameMaster.component.html',
  styleUrl: './gameMaster.component.css'
})
export class GameMasterComponent {

  Badges: number = 0;
  Experience: number = 0;
  GamesWon: number = 0;

  user: any;
  constructor(private info: InfoService) {
    this.user = this.ObtenerUsuario();
    if (this.user.image == null || this.user.image.length < 30) {
      this.user.image = 'https://www.w3schools.com/howto/img_avatar.png';

    }

    this.info.BadgeActual.subscribe((data: any) => {
      this.Badges = data;
      console.log(this.Badges);
    });

    this.info.ExperienceActual.subscribe((data: any) => {
      this.Experience = data;
      console.log(this.Experience);
    });

    this.info.GamesWonActual.subscribe((data: any) => {
      this.GamesWon = data;
      console.log(this.GamesWon);
    });


  }


  ObtenerUsuario() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
