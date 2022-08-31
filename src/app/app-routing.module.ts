import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products-list', canActivate: [AuthGuard], component: ProductsListComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export  class AppRoutingModule { }
