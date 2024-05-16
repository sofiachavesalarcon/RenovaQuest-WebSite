import { NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoService } from '../../../../services/info.service';

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
  GameData: any = [];

  constructor(private http: HttpClient, private info: InfoService) {
    this.user = this.ObtenerUsuario();

    this.http.get('http://www.api-rest.somee.com/api/badge').subscribe(data => {
      this.Badges = data;
      this.Badges = this.Badges.filter((item: any) => item.userId === this.user.userId)

      this.Badges.map((item: any) => {
        if (item.completed) {
          item.completed = 'Completed';
        }
      });

      this.info.SendBadge(this.Badges.length);

      const Experience = this.Badges.reduce((acc: any, item: any) => {
        return acc + item.experience;
      }, 0);
      this.info.SendExperience(Experience);

    });

    this.http.get('http://www.api-rest.somee.com/api/game').subscribe(data => {

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
