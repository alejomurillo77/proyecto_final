import { Component, OnInit } from '@angular/core';
import { Form, FormArray } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-registroestablecimiento',
  templateUrl: './registroestablecimiento.component.html',
  styleUrls: ['./registroestablecimiento.component.css']
})
export class RegistroestablecimientoComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  onSubmit(_datos:Form){
    console.log(_datos);

  }

}
