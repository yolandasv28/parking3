import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  playas: Observable<any[]>;
  nuevaPlaya = {
    nombre:'',
    direccion:''
  }

  constructor(private _sFirebase:FirebaseService) { }

  ngOnInit() {
    this.playas = this._sFirebase.getCanchas().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }
  crearPlaya(){
    console.log(this.nuevaPlaya);
    this._sFirebase.crearCancha(this.nuevaPlaya)
                    .then((response)=>{
                      console.log("La Playa se creó");
                    });
  }

  registrar(){
    this._sFirebase.doRegister().then(rpta=>console.log(rpta),error=>console.log(error));
  }

  iniciar(){
    this._sFirebase.iniciar().then(rpta=>console.log(rpta.credential),error=>console.log(error));
  }

  iniciarCredentials(){
    // this._sFirebase.iniciarCredentials().then(rpta=>console.log(rpta),error=>console.log(error));
    this._sFirebase.iniciarCredentials();
  }
}
