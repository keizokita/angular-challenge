import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ProductsService } from './products.service';
import { Products } from './products';
import { FormControl, FormGroup } from '@angular/forms';

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

  productList!: FormGroup;

  productSelected!: Products;

  inStorage!: Products[];

  constructor(
    private authService: AuthService,
    private service: ProductsService,
    private router: Router,
    private route: ActivatedRoute  ) {}

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
    this.service.remove(this.productSelected.id);
    alert('Produto excluido com sucesso!');
    this.service.list().subscribe((dados) => (this.product = dados));
  }
  
  // onConfirmDelete() {
  //   this.service.remove(this.productSelected.id);
  //   this.service.list().subscribe((dados) => (this.product = dados));
  // }

  // onDeclineDelete() {
  //   this.deleteModal.hide();
  // }

  onVenda(id: any) { 
    // this.service.loadByID(id).subscribe((inStorage: any) => { // puxa o item por id
    //   this.service.sell(--inStorage.inStorage)
    //   console.log(inStorage)
    // })
    // this.service.list().subscribe((dados) => (this.product = dados)); // atualiza a lista com os dados atualizados
    

    this.service.loadByID(id).subscribe((produtoRetorando:any) => {
      produtoRetorando.inStorage--;
      this.service.update(produtoRetorando).subscribe(
        () => this.service.list().subscribe((dados) => (this.product = dados))
      )
    })
    alert('Produto vendido com sucesso!');
  }

} 

