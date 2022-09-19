import { ProductsFormComponent } from './products-form/products-form.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'products-list',
    canActivate: [AuthGuard],
    component: ProductsListComponent,
  },
  {
    path: 'products-list/new',
    canActivate: [AuthGuard],
    component: ProductsFormComponent,
  },
  {
    path: 'products-list/edit/:id',
    canActivate: [AuthGuard],
    component: ProductsFormComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
