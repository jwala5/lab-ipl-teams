import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../teams';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {
  constructor() {}

  team = TEAMS;

  ngOnInit(): void {}
}
