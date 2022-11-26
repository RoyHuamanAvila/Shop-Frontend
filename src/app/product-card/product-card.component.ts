import { Component, Input } from '@angular/core';
import { FoundProduct, Product } from 'src/types';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: FoundProduct
}
