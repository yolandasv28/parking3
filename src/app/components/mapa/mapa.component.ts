import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  // styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  title: string = 'My first AGM project';
  

  miPosicion = {
    lat:-16.3988900,
    lng:-71.5350000
      }

  
  constructor() {
    
    
   }

  ngOnInit() {
       
    
  }
  

  getLocation(){

    miPosicion = {
      lat:-15.3988900,
      lng:-72.5350000
        }
    
    }
}

// getLocation();

// function initMap() {
//   map = new google.maps.Map(div, {
//       center: miPosicion,
//       zoom: 13
//   });

 


