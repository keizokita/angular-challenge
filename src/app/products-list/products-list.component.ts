import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ProductsService } from './products.service';
import { Products } from './products';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Modal } from 'bootstrap';
import { bootstrapApplication } from '@angular/platform-browser';
import * as bootstrap from 'bootstrap';

declare var window: any;

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  showMenu: boolean = false;

  product!: Products[];

  submitted?: boolean;

  formValue!: FormGroup;

  productSelected!: Products;

  inStorage!: Products;

  @ViewChild('deleteModal') deleteModal: any;
  modalService: any;

  constructor(
    private authService: AuthService,
    private service: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      (show) => (this.showMenu = show)
    );

    this.service.list().subscribe((dados) => (this.product = dados));
  }

  onEdit(id: any) {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  onDelete(product: any) {
    console.log('sucesso');
    this.productSelected = product;
    // this.deleteModal = new window.bootstrap.Modal(document.getElementById('deleteModal'), {
    // })
    // this.deleteModal.show()
    this.service.remove(this.productSelected.id);
    alert('Produto excluido com sucesso!')
    this.service.list().subscribe((dados) => (this.product = dados));
  }
  
  // onConfirmDelete() {
  //   this.service.remove(this.productSelected.id);
  //   this.service.list().subscribe((dados) => (this.product = dados));
  // }

  // onDeclineDelete() {
  //   this.deleteModal.hide();
  // }

  onVenda(inStorage: any) {
    //buy (--inStorage) 
    console.log(--inStorage)
    return this.service.list().subscribe((dados) => (this.product = dados));
  }

  // loadByID(id: any) {
  //   this.service.loadByID(id)
  //   .subscribe(
  //     (product: Products) => this.showProduct(product),
  //   )
  // }

  // showProduct(product: Products) {
  //   if (this.formValue) {
  //     this.formValue.reset();
  //   }
  // }
}
function buy(inStorage: number) {
  --inStorage
}

