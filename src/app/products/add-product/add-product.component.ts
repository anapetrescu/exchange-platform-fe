import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss', '../products.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product;
  features: Array<String>;
  constructor(
    private productsService: ProductsService,
    private router: Router) { 
    this.product = new Product()
  }

  ngOnInit(): void {
  }

  addProduct() {
    console.log(this.product)
    this.product.seller.id = localStorage.getItem("user_id");
    this.product.available = true;
    this.productsService.addProduct(this.product)
    .subscribe(res => this.router.navigate(['/products']))
  }

  addFeature() {
    this.product.features.push({
        key: "",
        value: ""
      })
  }

  typeChanged(type) {
    if(type !== "Other"){
    this.productsService.getFeatures(type).subscribe(
      res => {
        this.product.features = [];
        console.log(res)
        for(let i = 0; i < res.length; i++) {
          this.product.features.push({key: res[i], value: ""})
        }
      }
    )
  } else {
    this.product.features = [];
    this.product.features.push({key: "", value: ""})
  }
  }
}
