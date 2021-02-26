import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private MessageService:MessageService) { }

  getHeroes():Observable<hero[]>{
   const heroes = of(HEROES);
   this.MessageService.add('HeroService: fetched heroes');
   return heroes;
  }

}
