import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import {HEROES} from '../mock-heroes'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public Heroes=HEROES;
  selected?:hero;
  constructor(private heroService:HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(Hero:hero):void{
    this.selected=Hero;
    this.messageService.add('HeroesComponent:Selected hero id= '+Hero.id);
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.Heroes=heroes);
  }
}
