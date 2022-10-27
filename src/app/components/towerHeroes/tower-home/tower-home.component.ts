import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tower-home',
  templateUrl: './tower-home.component.html',
  styleUrls: ['./tower-home.component.css'],
})
export class TowerHomeComponent implements OnInit {
  towerHeroesTitle = 'Tower of Heroes';

  constructor() {}

  ngOnInit(): void {}
}
