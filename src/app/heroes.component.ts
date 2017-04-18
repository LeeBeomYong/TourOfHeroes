//@Component 구성요소를 사용하기 위해 import 
import { Component } from '@angular/core';
//Hero 클래스를 사용하기 위해 import
import { Hero } from './hero';
//HeroService 클래스를 사용하기 위해 import
import {HeroService} from './hero.service';

import { OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  //providers:[HeroService]
})
export class HeroesComponent implements OnInit {
  
  /* Hero 타입을 생성과 동시에 값 할당
  hero: Hero = {
    id: 1,
    name:'Windstorm'
  };
  */
  //Hero 배열 타입의 heroes 변수 선언 
  heroes: Hero[];
  //Hero 타입의 selectedHero 변수 선언
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  getHeroes(): void{
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}


  ngOnInit(): void {
    this.getHeroes();
  }

  //반환값이 없는 onSelect(Hero) 메소드 선언
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } 

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {return;}
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if(this.selectedHero === hero ) { this.selectedHero = null;}
        });
  }
}
