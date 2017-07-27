import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getHeroesBySlowly();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  getHeroesByAsyn(): void {
    this.heroService.getHeroesByAsyn().then(heroes => this.heroes = heroes);
  }

  getHeroesBySlowly(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
