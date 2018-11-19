import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: dovukao heroje');
    return of(HEROES);
  }

  getHero(id: number) {
    this.messageService.add(`HeroService: dobavio hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
