import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  arr = [1, 2, 3, 4];
  constructor() { }

  ngOnInit(): void {
  }

}
