import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab3EditUserPage } from './tab3-edit-user.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3EditUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab3EditUserPage]
})
export class Tab3EditUserPageModule {}
