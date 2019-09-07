import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-category-menu-image",
  templateUrl: "./category-menu-image.component.html",
  styleUrls: ["./category-menu-image.component.scss"]
})
export class CategoryMenuImageComponent implements OnInit {
  @Input() image: string;
  constructor() {}

  ngOnInit() {
    this.image =
      "https://vn-test-11.slatic.net/p/7/amart-fashion-women-long-dress-lace-splice-slim-elegent-ladies-wedding-party-formal-dressesred-intl-4251-07454022-37893b81a03d37ba2f9daf0248516245-catalog.jpg_80x80Q100.jpg_.webp";
  }
}
