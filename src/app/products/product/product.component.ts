import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss', '../products.component.scss']
})
export class ProductComponent implements OnInit {
  product: any
  noImg: string = '../assets/no-image.png';

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state)).subscribe(res => {
        this.product = {
          "id": "31a97baf-7175-49e5-9f8c-76b28dd1ff81",
          "type": "AUTO",
          "name": "prod 1",
          "description": "desc 1",
          "seller": {
              "id": "14e182a9-2a8d-4664-a623-c69b90a6d57d",
              "firstName": "Cosmin",
              "lastName": "Dimisca",
              "address": "Brasov",
              "phone": "0765999999",
              "email": "cosmin.dimisca@gmail.com"
          },
          "address": "address1",
          "price": 20.21,
          "available": true,
          "features": [
              {
                  "id": "daa114f7-5667-448e-9aee-59a02ee8dd0b",
                  "key": "year",
                  "value": "val1"
              },
              {
                  "id": "8babd3ea-692c-4587-8c24-858a040891aa",
                  "key": "brand",
                  "value": "val1"
              },
              {
                  "id": "3c2d831e-33ba-4b19-8e9b-76082483a7f2",
                  "key": "model",
                  "value": "val1"
              },
              {
                  "id": "8595f651-5ed2-49d4-be54-99a8c1c373fc",
                  "key": "kilometers",
                  "value": "val1"
              },
              {
                  "id": "bec9c3b8-e237-4edd-a7a7-c3a672f63bfa",
                  "key": "fuel",
                  "value": "val1"
              },
              {
                  "id": "6c079c0c-8b55-41be-a82a-18e97b3a991a",
                  "key": "cubic-capacity",
                  "value": "val1"
              }
          ]
      };
      });
  }

}
