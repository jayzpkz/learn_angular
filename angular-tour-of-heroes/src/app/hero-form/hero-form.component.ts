import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  heroes: Hero[] = [];

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  public submitted = false;

  constructor(private location: Location, private heroService: HeroService) { }

  onSubmit() {
    this.submitted = true;
    console.log("submitted", this.model);
  }

  onSave(hero: Hero): void {
    hero.name = hero.name.trim();
    if (!hero.name) { return; }
    this.heroService.addHero({ name: hero.name, alterEgo: hero.alterEgo, power: hero.power } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  onEdit() {
    this.submitted = false;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  goBack(): void {
    this.location.back();
  }
}
