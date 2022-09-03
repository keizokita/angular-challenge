import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsFormComponent } from './../products-form/products-form.component';
import { ProductsListComponent } from './products-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [ProductsListComponent, ProductsFormComponent],
})
export class ProductsListModule { }
