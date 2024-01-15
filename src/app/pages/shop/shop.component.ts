import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  template: `<h1>Shop</h1>`
})
export class ShopComponent {

  constructor(private telegram: TelegramService, private products: ProductsService) {
    this.telegram.MainButton.show();
    console.log(this.products.byGroup)
  }

}
