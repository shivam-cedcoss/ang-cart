import { Routes } from '@angular/router';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
    {
        path:"",
        component:CategoriesComponent
    },
    {
        path:"category/:id",
        component:SubCategoryComponent
    }
];
