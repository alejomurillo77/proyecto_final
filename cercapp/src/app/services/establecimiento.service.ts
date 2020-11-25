import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Establecimiento } from '../models/establecimiento';


@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {


  URL_API = 'http://localhost:4000/api/employees';
  
  selectedestablecimiento: Establecimiento = {
    name: '',
    email: '',
    password: '',
  } ;
  establecimiento: Establecimiento[] = [];

  constructor(private http: HttpClient){}
  
  

  getestablecimiento(){
    return this.http.get<[]>(this.URL_API);
  }

  createestablecimiento(establecimiento: Establecimiento){
    return this.http.post(this.URL_API, establecimiento)
  }

}
