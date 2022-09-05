import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from '../products-list/products';
import { ProductsService } from '../products-list/products.service';
import { Location } from '@angular/common';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  formValue!: FormGroup;

  submitted = false;

  productsList!: Products;

  constructor(
    private fb: FormBuilder,
    private service: ProductsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.params
    //   .pipe(
    //     map((params: any) => params['id']),
    //     switchMap((id) => this.service.loadByID(id))
    //   )
    //   .subscribe((product) => this.updateForm(product));

    const product = this.route.snapshot.data['product'];

    this.formValue = this.fb.group({
      name: [product.name],
      brand: [product.brand],
      price: [product.price],
      inStorage: [product.inStorage],
      minStorage: [
        product.minStorage,
        [Validators.required, Validators.min(1)],
      ],
    });
  }

  // updateForm(product: any) {
  //   this.formValue.patchValue({
  //     id: product.id,
  //     name: product.name,
  //     brand: product.brand,
  //     price: product.price,
  //     inStrorage: product.inStrorage,
  //     minStorage: product.minStorage,
  //   });
  // }

  postProducts() {
    this.productsList.name = this.formValue.value.name;
    this.productsList.brand = this.formValue.value.brand;
    this.productsList.price = this.formValue.value.price;
    this.productsList.inStorage = this.formValue.value.inStorage;
    this.productsList.minStorage = this.formValue.value.minStorage;

    this.service.postProducts(this.productsList).subscribe(() => {
      this.formValue.reset();
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formValue.value);
    if (this.formValue.valid) {
      console.log('submit');
      this.service.save(this.formValue.value);
      this.location.back();

      if (this.formValue.value.id) {
        // update
        // this.service.save(this.formValue.value).subscribe(() => {
        //   this.location.back();
        // });
      }
    }

      // } else {
      //   this.service.create(this.formValue.value).subscribe(() => {
      //     this.location.back();
      //   });
      //}
      
  }
}
