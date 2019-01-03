import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';

  pages = [
      {
        title: 'Todos',
          url: '/tabs/menu/material/(menucontent:todos)'
      },
      {
          title: 'Libros',
          url: '/menu/(menucontent:tab2)'
      },
      {
          title: 'Apuntes',
          url: '/menu/(menucontent:tab2)'
      }

  ];
  constructor(private router: Router ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
