import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { AuthService } from './login/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
