import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {MenuPage} from './menu.page';
import {Tab2Page} from '../tab2/tab2.page';

const routes: Routes = [
    {
      path: 'material',
      component: MenuPage,
        children: [
            {
                path: 'todos',
                outlet: 'menucontent',
                component: Tab2Page
            }
        ]
    },
    {
      path: '',
      redirectTo: '/tabs/tab1'
    }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
