import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home-page.component';
import { MbscModule } from '@mobiscroll/angular';






@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MbscModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }]
    )
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
