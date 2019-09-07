import { BasePage } from './../../core/common/base.page';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BasePage {
  sliderOption = {
    initialSlide: 1,
    speed: 400
  };

  img = 'https://vn-test-11.slatic.net/p/8/bo-2-vong-tay-da-quang-phat-sang-trong-dem-1832-69147371-9b803425cabc1688698ee011ddd24580-catalog.jpg_200x200Q100.jpg_.webp1;'
}
