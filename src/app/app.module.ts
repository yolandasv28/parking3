import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapaComponent } from './components/mapa/mapa.component';
import { FirebaseComponent } from './components/firebase/firebase.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MapaComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwqi9yx2ts6NJdV1ATpbYTaOAXVcxHKPY'
      // AIzaSyDFT55Qs8eoTCRS0Js_e9IyZJn8RsSz0P4'
      // AIzaSyDfJO48nLxh390YRzexJrDRFRoLx9lRlac'
      // 'AIzaSyCh7rSz7BbqbYOdUcy7t0GTNgCaUxVvNmU'
         

    })     
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent],

})
export class AppModule { }
