import { Component, OnInit } from '@angular/core';
import {EstablecimientoService} from '../../services/establecimiento.service'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {


  constructor(public establecimientoService: EstablecimientoService) { }

  ngOnInit(): void {
     this.getestablecimiento();
  }

  getestablecimiento(){
    this.establecimientoService.getestablecimiento().subscribe(
      res => {
        this.establecimientoService.establecimiento = res;
      },
      err => console.error(err)
      )
  }
  addestablecimiento(form: NgForm){
    this.establecimientoService.createestablecimiento(form.value).subscribe(
      res => {
        this.getestablecimiento();
        form.reset();
      },
      err => console.error(err)
    )
  }


}
