import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
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
      apiKey: 'AIzaSyBu4_pYPkfjS9PcXjFpTf50kOYF0YmdVN0'
     
    })     
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
