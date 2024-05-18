import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GameMasterComponent } from '../gameMaster.component';
import { InfoService } from '../../../../services/info.service';

@Component({
  selector: 'app-partidas',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './partidas.component.html',
  styleUrl: './partidas.component.css'
})
export class PartidasComponent implements OnInit {

  GameData: any = [];
  user: any;


  constructor(private http: HttpClient, private info: InfoService) {
    this.user = this.ObtenerUsuario();
  }

  ngOnInit() {
    this.http.get('https://www.api-rest.somee.com/api/game').subscribe(data => {

      this.GameData = data;

      this.GameData = this.GameData.filter((item: any) => item.userId === this.user.userId);

      const wonGamesCount = this.GameData.reduce((count: any, game: any) => {
        return game.score !== '0:00' ? count + 1 : count;
      }, 0);

      this.info.SendGamesWon(wonGamesCount);

    });
  }
  ObtenerUsuario() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

}
