import { Component, Input } from '@angular/core';
import { IProduct } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  template: `
  <h2>{{ title }}</h2>,
  <h4>{{ subtitle }}</h4>,
  <ul class="products">
    @for (product of products; track product.id) {
      <li class="product-item">
        <div class="product-image">
          <img [src]="product.image" [alt]="product.title">
        </div>
      </li>
    }
  </ul>
  `
})
export class ProductListComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() products: IProduct[];
}
