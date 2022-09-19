import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ProductsService } from './products.service';
import { Products } from './products';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

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

  productList!: FormGroup;

  productSelected!: Products;

  inStorage!: Products[];

  minStorage!: Products[];

  deleteModalRef!: BsModalRef;

  vendaModalRef!: BsModalRef;

  idSelected!: Products;

  constructor(
    private authService: AuthService,
    private service: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      (show) => (this.showMenu = show)
    );

    this.service.list().subscribe((dados) => (this.product = dados));
  }

  onEdit(id: any) {
    this.router.navigate(['edit', id], { relativeTo: this.route });
    this.service.list().subscribe((dados) => (this.product = dados));
  }

  onDelete(deleteModal: TemplateRef<any>, product: any) {
    this.openModal(deleteModal);
    this.productSelected = product;
  }

  openModal(deleteModal: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(deleteModal, {
      class: 'modal-sm',
    });
  }

  onConfirmDelete(product: any) {
    this.service
      .remove(this.productSelected.id)
      .subscribe((success) => this.deleteModalRef.hide());
    this.service.list().subscribe((dados) => (this.product = dados));
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  onVenda(vendaModal: TemplateRef<any>, id: any) {
    this.service.loadByID(id).subscribe((produtoRetornado: any) => {
      if (produtoRetornado.inStorage == 0) {
        this.openToast();
      } else {
        this.openVendaModal(vendaModal);
        this.idSelected = id;
      }
    });
  }

  openVendaModal(vendaModal: TemplateRef<any>) {
    this.vendaModalRef = this.modalService.show(vendaModal, {
      class: 'modal-sm',
    });
  }

  onConfirmVenda() {
    this.service
      .loadByID(this.idSelected)
      .subscribe((produtoRetornado: any) => {
        produtoRetornado.inStorage--;
        this.service.update(produtoRetornado).subscribe(() => {
          this.vendaModalRef.hide();
        });
        this.service.list().subscribe((dados) => (this.product = dados));
      });
  }

  onDeclineVenda() {
    this.vendaModalRef.hide();
  }

  openToast() {
    this.toastr.error(
      'Produto fora de estoque no momento.',
      'Venda Impossivel!'
    );
  }
}
