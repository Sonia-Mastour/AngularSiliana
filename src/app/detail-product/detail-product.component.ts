import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  public product: Product;
  constructor(private currentRoute: ActivatedRoute,
    private prodService: ProductService) { }

  ngOnInit(): void {
    let id= this.currentRoute.snapshot.params['id'];
    this.prodService.getProductById(id).subscribe(
      (data:Product)=>{this.product=data; console.log(this.product)}
    )
  }

}
