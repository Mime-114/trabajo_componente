import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonContPageRoutingModule } from './ion-cont-routing.module';

import { IonContPage } from './ion-cont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonContPageRoutingModule
  ],
  declarations: [IonContPage]
})
export class IonContPageModule {}
