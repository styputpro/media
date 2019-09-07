import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() image: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
    this.image = 'https://cdn.tgdd.vn/Products/Images/1942/162458/samsung-ua43nu7400-11-550x340.jpg';
  }

}
