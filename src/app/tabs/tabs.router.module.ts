import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: '../menu/menu.module#MenuPageModule',
          }
        ]
      },
        {
            path: 'menu-todos',
            children: [
                {
                    path: '',
                    loadChildren: '../menu/menu.module#MenuPageModule',
                    redirectTo: '/tabs/menu/material/(menucontent:todos)'
                }
            ]
        },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
          path: 'clases',
          children: [
              {
                  path: '',
                  loadChildren: '../tab4/tab4.module#Tab4PageModule'
              }
          ]
      },
        {
            path: 'tab3/tab3-edit-user',
            children: [
                {
                    path: '',
                    loadChildren: '../tab3-edit-user/tab3-edit-user.module#Tab3EditUserPageModule'
                }
            ]
        },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
