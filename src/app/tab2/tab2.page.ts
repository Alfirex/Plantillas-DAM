import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: any = [];
  itemExpandedHeight = 200;
  constructor() {
    this.items = [
        {title: 'Libro de Sexo', expanded: false, descripcion: 'Este libro es muy pevertido ads aa wa ce fsf ada da wa dwad awd a wdadwa '},
        {title: 'Apuntes de como Ligar', expanded: false, descripcion: 'Este libro no vale nada'},
        {title: 'Libro de Valenciano', expanded: false, descripcion: 'Este libro no vale nada'},
        {title: 'Libro de Mates', expanded: false, descripcion: 'Este libro no vale nada'},
        {title: 'Libro de Informatica', expanded: false, descripcion: 'Este libro no vale nada'},
        {title: 'Libro de Deporte', expanded: false, descripcion: 'Este libro te agota de cansancio'},
        {title: 'Libro de Jorge', expanded: false, descripcion: 'Este libro diario'},
        {title: 'Libro de Santi', expanded: false, descripcion: 'Este libro santi'},
        {title: 'Libro de Carmen', expanded: false, descripcion: 'Este libro Carmeta'}
    ];
  }
  expandedItem(item) {
      if (!item.expanded) {
    item.expanded = true;
    } else {
        item.expanded = false;
    }

  }

    falert(){
      alert("asdasd")
    }
}
