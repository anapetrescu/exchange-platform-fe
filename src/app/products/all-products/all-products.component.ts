import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss', '../products.component.scss']
})
export class AllProductsComponent implements OnInit, OnChanges {
  products: object;
  noImg: string = '../assets/no-image.png';
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(): void {
    this.init();
  }

  init() {
    this.productService.getProducts().subscribe(res => this.products = res);
  }

}
