import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public appName!: string;
  public list!: Product[];
  constructor() {
  }
  ngOnInit(): void {
    this.appName ='myApp Store';
    this.list=[
      {id:12,
      name:'T-shirt 1',
      price: 23,
      quantity: 2,
      picture: 'https://www.exist.com.tn/61485-large_default/t-shirt.jpg',
      nbrLike: 10
    },
    { id:11,
      name:'T-shirt 1',
      price: 23,
      quantity: 0,
      picture: 'https://www.exist.com.tn/81822-large_default/t-shirt-de-sport.jpg',
      nbrLike: 10
    }
    ]
    console.log(this.list)
  }
  incrementLike(product:Product): void{
      let i = this.list.indexOf(product);
      if(i!=-1){
        this.list[i].nbrLike++
      }
      console.log(this.list)
  }
  buyProduct(i:number){
      this.list[i].quantity--
  }

}
