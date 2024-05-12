import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingPagePage } from './loading-page.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: LoadingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule], // Sin IonicModule.forRoot()
  exports: [RouterModule],
})
export class LoadingPagePageRoutingModule {}
