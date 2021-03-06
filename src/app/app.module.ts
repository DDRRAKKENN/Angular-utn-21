import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LoginComponent } from './login/login.component'
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    CatalogoComponent,
    DetalleComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
