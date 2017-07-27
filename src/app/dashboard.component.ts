import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {

    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        this.getHeroesByAsyn();
    }

    getHeroesByAsyn(): void {
        this.heroService.getHeroesByAsyn()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
