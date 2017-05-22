import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.newHero = {}
  }

  public newHero: Hero;

  public createHero() {
    this.heroService.createHero(this.newHero).subscribe(createdHero => {
      this.newHeroCreated.emit({
        value: createdHero
      });
    });
  }

  @Output()
  newHeroCreated = new EventEmitter();

}