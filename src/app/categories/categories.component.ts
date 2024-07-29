import { Component,OnInit } from '@angular/core';
import { FetchApiService } from '../../core/services/fetch-api.service';
import { ProductsComponent } from "../products/products.component";
import { DataSharingService } from '../../core/services/shared/data-sharing.service';
import { Router } from '@angular/router';
interface ObjI {
  id:number,
  name:string,
  image:string,
  creationAt:string,
  updatedAt:string
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categoriesData:ObjI[]=[];

  constructor(private cateService:FetchApiService , private currentId:DataSharingService , private router:Router){
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.cateService.getAllCategories().subscribe((res:any)=>{
      this.categoriesData = res.splice(0,5)
    })
  }

  getParticularCategory(id:number){
    this.currentId.getCategoryId(id);
    this.router.navigateByUrl(`category/${id}`)
  }

}
