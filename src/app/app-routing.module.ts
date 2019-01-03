import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'tab3', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tabs/menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab3-edit-user', loadChildren: './tab3-edit-user/tab3-edit-user.module#Tab3EditUserPageModule' }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
