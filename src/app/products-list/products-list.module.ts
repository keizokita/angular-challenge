import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsFormComponent } from './../products-form/products-form.component';
import { ProductsListComponent } from './products-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [BsModalService],
  declarations: [ProductsListComponent, ProductsFormComponent],
})
export class ProductsListModule { }
