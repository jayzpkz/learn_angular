import { Component } from '@angular/core';
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

  submitted = false;

  constructor(private location: Location) { }

  onSubmit() { this.submitted = true; }

  goBack(): void {
    this.location.back();
  }

}
