import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  public submitted = false;

  constructor(private location: Location) { }

  onSubmit() {
    this.submitted = true;
    console.log("submitted", this.submitted);
  }

  onEdit() {
    this.submitted = false;
    console.log("edit", this.submitted);
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  goBack(): void {
    this.location.back();
  }
}
