import { ProductsFormComponent } from './products-form/products-form.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'products-list', canActivate: [AuthGuard], component: ProductsListComponent },
  { path: 'products-list/new',canActivate: [AuthGuard], component: ProductsFormComponent },
  { path: 'att', component: ProductsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export  class AppRoutingModule { }
