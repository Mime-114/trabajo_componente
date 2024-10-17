import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonContPage } from './ion-cont.page';

const routes: Routes = [
  {
    path: '',
    component: IonContPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonContPageRoutingModule {}
