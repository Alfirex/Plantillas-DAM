import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

    items: any = [];
    itemExpandedHeight = 200;
    constructor() {
        this.items = [
            {title: 'Juanmi', expanded: false, descripcion: 'Este libro es muy pevertido ads aa wa ce fsf ada da wa dwad awd a wdadwa '},
            {title: 'Paco', expanded: false, descripcion: 'Este libro no vale nada'},
            {title: 'Belen', expanded: false, descripcion: 'Este libro no vale nada'},
            {title: 'Tomas', expanded: false, descripcion: 'Este libro no vale nada'},
            {title: 'Carlos', expanded: false, descripcion: 'Este libro no vale nada'},
            {title: 'Juan', expanded: false, descripcion: 'Este libro te agota de cansancio'},
            {title: 'Rosa', expanded: false, descripcion: 'Este libro diario'},
            {title: 'Patricia', expanded: false, descripcion: 'Este libro santi'},
            {title: 'Carmen', expanded: false, descripcion: 'Este libro Carmeta'}
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

    ngOnInit(): void {
    }

}
