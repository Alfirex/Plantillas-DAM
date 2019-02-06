import { Component, OnInit } from '@angular/core';
import { libro } from '../models/libros.clase';

import { apuntes } from '../models/apuntes.clase';

@Component({
  selector: 'venta',
  templateUrl: './venta-page.component.html',
  styleUrls: ['./venta-page.component.scss'],
})
export class VentaPage implements OnInit {

    public oLibro: libro;
    public oApuntes: apuntes;

    constructor() {
        this.oLibro = new libro('', '', '', '', '', '', '', '', '');
        this.oApuntes = new apuntes('', '', '', '', '', '', '', '');
    }

    ngOnInit(): void {
    }

    onSubmitLibro() {
        console.log(this.oLibro);
    }
    onSubmitApuntes(){
        console.log(this.oApuntes);
    }
}
