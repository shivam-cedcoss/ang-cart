import { Component } from '@angular/core';
import { DataSharingService } from '../../core/services/shared/data-sharing.service';
import { ItemComponent } from '../item/item.component';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-sub-category',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css'
})
export class SubCategoryComponent {
  items:ProductsI[]=[];
  constructor(private currentId:DataSharingService,private http:HttpClient){
  }
  ngOnInit(){
    this.http.get(`https://api.escuelajs.co/api/v1/categories/${this.currentId.cateId}/products`).subscribe((res:any)=>{
      this.items = res
    })
  }
}
