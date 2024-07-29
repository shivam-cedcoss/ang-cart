import { Component,OnInit } from '@angular/core';
import { FetchApiService } from '../../core/services/fetch-api.service';
import { ItemComponent } from '../item/item.component';

interface ProductsI {
  id:number,
  images:[],
  price:number,
  title:string,
  updatedAt:string,
  creationAt:string,
  description:string
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  productData:ProductsI[] =[];
  constructor(private prodSer:FetchApiService){
  }

  ngOnInit(): void {
    this.getAllProduct()
  }
  getAllProduct(){
    this.prodSer.getAllProducts().subscribe((res:any)=>{
      this.productData = res
    })
  }
}
