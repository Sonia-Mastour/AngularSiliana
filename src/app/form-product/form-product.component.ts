import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public product!: Product;
  constructor(private prodService:ProductService,
    private route:Router) { }
  ngOnInit(): void {
    this.product = new Product()
  }
  save(){
    this.product.nbrLike=0;
    this.prodService.addProduct(this.product).subscribe(
      ()=>{this.route.navigate(['/list'])},
      ()=>{console.log('error')},
      ()=>{console.log("complete")}
    )

  }

}
