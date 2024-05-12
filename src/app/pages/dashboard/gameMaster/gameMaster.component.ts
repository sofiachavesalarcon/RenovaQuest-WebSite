import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-game-master',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './gameMaster.component.html',
  styleUrl: './gameMaster.component.css'
})
export class GameMasterComponent { }
