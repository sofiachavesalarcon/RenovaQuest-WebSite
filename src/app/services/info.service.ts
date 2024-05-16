import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private Badge = new BehaviorSubject<string>('');
  BadgeActual = this.Badge.asObservable();

  private Experience = new BehaviorSubject<string>('');
  ExperienceActual = this.Experience.asObservable();


  private GamesWon = new BehaviorSubject<string>('');
  GamesWonActual = this.GamesWon.asObservable();


  SendBadge(message: string) {
    this.Badge.next(message);
  }

  SendExperience(message: string) {
    this.Experience.next(message);
  }

  SendGamesWon(message: string) {
    this.GamesWon.next(message);
  }
}
