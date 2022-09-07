import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ProductsService } from './products.service';
import { Products } from './products';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  showModal: any;

  deleteModalRef: any;

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
    //this.deleteModalRef = this.modalService.show(this.deleteModal, { class: '.modal-sm'});
    this.service.remove(this.productSelected.id);
    this.service.list().subscribe((dados) => (this.product = dados));
  }

  // onConfirmDelete() {
  //   this.service.remove(this.productSelected.id)
  // }

  // onDeclineDelete() {
  //   this.deleteModalRef.hide();
  // }

  onVenda() {
    function venda() {}
  }

  // loadByID(id: any) {
  //   this.service.loadByID(id)
  //   .subscribe(
  //     (product: Products) => this.showProduct(product),
  //   )
  // }

  showProduct(product: Products) {
    if (this.formValue) {
      this.formValue.reset();
    }
  }
}
