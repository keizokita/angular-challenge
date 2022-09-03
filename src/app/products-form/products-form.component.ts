import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }  

  ngOnInit(): void {

    this.form = this.fb.group({
      name: [null],
      brand: [null],
      price: [0],
      inStorage: [0],
      minStorage: [0,[Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form?.value)
    if (this.form?.valid) {
      console.log('submit');
    }
  }

  hasError(field: number) {
    
  }

}
