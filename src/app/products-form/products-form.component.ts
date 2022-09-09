import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from '../products-list/products';
import { ProductsService } from '../products-list/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  formValue!: FormGroup;

  submitted = false;

<<<<<<< HEAD
  productsList!: Products;
  product?: Products[];

  name = '';
  brand = '';
  price = '';
  inStorage = '';
  minStorage = '';
=======
  @Input() product!: Products[];

  name: string = '';
  brand: string = '';
  price: string = '';
  inStrorage: string = '';
  minStorage: string = '';
>>>>>>> 8e0c52e15ed714c3bd80c7f57e9a18ae756d11fd

  constructor(
    private fb: FormBuilder,
    private service: ProductsService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
<<<<<<< HEAD
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      price: ['', [Validators.required]],
      inStorage: ['', [Validators.required]],
      minStorage: ['', [Validators.required]],
    });

    this.route.params.subscribe((params: any) => {
      const id = params.id;
      console.log('id',id);
      this.service.loadByID(id).subscribe(product => {
      this.formValue.patchValue(product);
      // if (this.formValue == null) console.log('form nulo');
      })
    });
  }

  // updateForm(product: any) {
  //   this.formValue.patchValue({
  //     id: product.id,
  //     name: product.name,
  //     brand: product.brand,
  //     price: product.price,
  //     inStorage: product.inStorage,
  //     minStorage: product.minStorage,
  //   });
  // }

  // postProducts() {
  //   this.productsList.name = this.formValue.value.name;
  //   this.productsList.brand = this.formValue.value.brand;
=======
      name:  ['',[Validators.required]],
      brand: ['',[Validators.required]],
      price: ['',[Validators.required]],
      inStorage: ['',[Validators.required]],
      minStorage: ['',[Validators.required]],
    });

    console.log('teste3');

    this.route.params.subscribe((params: any) => {
      const id = params.id;
      console.log(id);
      const product = this.service.loadByID(id);
      console.log(this.formValue);
      if (this.formValue == null) console.log('nulo');

      //this.service.updateForm(product);
      console.log(product);
      console.log('teste2');
      //product.subscribe((product: Products) => {
      //console.log('teste')
      //answ = product;
      //this.service.updateForm(product);
      //});
    });

    // this.route.params
    //   .pipe(
    //     map((params: any) => params['id']),
    //     switchMap(async (id) => this.service.loadByID(id))
    //   )
    //   .subscribe((product) => this.updateForm(product));

    const product = this.route.snapshot.data['product'];

    // this.formValue = this.fb.group({
    //   id: [null],
    //   name: [null],
    //   brand: [null],
    //   price: [null],
    //   inStorage: [null],
    //   minStorage: [null, [Validators.required, Validators.min(1)]],
    // });
  }

  // postProducts() {
  //   this.updateForm = this.formValue.value.name;
  //   //this.formValue.controls['brand'].setValue(this.updateForm.brand);
>>>>>>> 8e0c52e15ed714c3bd80c7f57e9a18ae756d11fd
  //   this.productsList.price = this.formValue.value.price;
  //   this.productsList.inStorage = this.formValue.value.inStorage;
  //   this.productsList.minStorage = this.formValue.value.minStorage;

<<<<<<< HEAD
  //   this.service.postProducts(this.productsList).subscribe(() => {
  //     this.formValue.reset();
  //   });
=======
  //   // this.service.postProducts(this.productsList).subscribe(() => {
  //   //   this.formValue.reset();
  //   // });
>>>>>>> 8e0c52e15ed714c3bd80c7f57e9a18ae756d11fd
  // }

  onSubmit() { // esta chamando a funcao loadById
    this.submitted = true;
    console.log(this.formValue.value);
<<<<<<< HEAD
    if (this.formValue.valid)
    console.log('submit')
    // this.service.save(this.formValue.value);
    // this.location.back()
    // this.service.list().subscribe((dados) => (this.product = dados));
    if (this.formValue.value.id) {
      console.log('update');
      this.service.save(this.formValue.value)
        this.location.back()
      
  
    // } else {
    //   this.service.update(this.formValue.value)
    //   this.location.back()
    //   this.service.list().subscribe((dados) => (this.product = dados));
    }
=======
    if (this.formValue.valid) {
      console.log('submitted');
      this.service.save(this.formValue.value);
      this.location.back();
    }
    // {
    //   this.service.save(this.formValue.value);
    //   this.location.back();

    //   if (this.formValue.value.id !== '') {
    //     // update
    //     this.service.update(this.formValue.value);
    //     this.service.save(this.formValue.value);
    //     this.location.back();
    //   } else {
    //     this.service.create(this.formValue.value);
    //     this.service.save(this.formValue.value);
    //     this.location.back();
    //   }
    // }
>>>>>>> 8e0c52e15ed714c3bd80c7f57e9a18ae756d11fd
  }
}
