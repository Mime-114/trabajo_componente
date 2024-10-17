import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonInfineScrollPageRoutingModule } from './ion-infine-scroll-routing.module';

import { IonInfineScrollPage } from './ion-infine-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonInfineScrollPageRoutingModule
  ],
  declarations: [IonInfineScrollPage]
})
export class IonInfineScrollPageModule {}
