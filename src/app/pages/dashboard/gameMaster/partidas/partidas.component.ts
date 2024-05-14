import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GameMasterComponent } from '../gameMaster.component';

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


  constructor(private http: HttpClient) {
    this.user = this.ObtenerUsuario();
  }

  ngOnInit() {
    this.http.get('http://www.api-rest.somee.com/api/game').subscribe(data => {

      this.GameData = data;
      console.log(this.GameData);
      this.GameData = this.GameData.filter((item: any) => item.userId === this.user.userId);
      console.log(this.GameData);

    });
  }
  ObtenerUsuario() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

}
