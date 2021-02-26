import { importType } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import {hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 
export class AppComponent {
  title = 'angular-tour-of-heroes';
  public heroes:hero={
    id:1,
    name:'hihi'
  };
  
  
}
