import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ProductsService } from './products.service';
import { Products } from './products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  showMenu: boolean = false;

  products?: Products[];
  
  constructor(
    private authService: AuthService,
    private service: ProductsService
    ) { }


  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );

    this.service.list()
    .subscribe(dados => this.service = dados);
  }

}
