import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() loadById: EventEmitter<any> = new EventEmitter();

  formValue!: FormGroup;

  submitted = false;

  productsList!: Products;
  product?: Products[];

  name = '';
  brand = '';
  price = '';
  inStorage = '';
  minStorage = '';

  constructor(
    private fb: FormBuilder,
    private service: ProductsService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      price: ['', [Validators.required]],
      inStorage: ['', [Validators.required]],
      minStorage: ['', [Validators.required]],
    });

    

    this.route.params.subscribe((params: any) => {
      const id = params.id;
      if (id !== undefined) {
        this.service.loadByID(id).subscribe((product) => {
          this.formValue.patchValue(product);
        });
      }
    });
  }

  verifyValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  aplyCssError(campo: any){
    return {
      'is-invalid': this.verifyValidTouched(campo),
      'has-feedback': this.verifyValidTouched(campo)
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.formValue.valid) {
      this.service.save(this.formValue.value);
      this.location.back();
    }
  }

  onCancel() { 
    this.location.back();
  }
}
