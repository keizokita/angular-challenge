import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ProductsService } from './products.service';
import { Products } from './products';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  showMenu: boolean = false;

  product!: Products[];
  
  submitted?: boolean;
  
  formValue!: FormGroup;



  constructor(
    private authService: AuthService,
    private service: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }


  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );

    this.service.list()
    .subscribe(dados => this.product = dados);
  }

  onEdit(id: any) {
    this.router.navigate(['edit', id], {relativeTo: this.route});
  }

  onVenda(inStrorage: number) {
    function onVenda() {
      inStrorage--;
    }

  }
}
