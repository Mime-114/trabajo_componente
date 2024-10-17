import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

@Component({
  selector: 'app-ion-item',
  templateUrl: './ion-item.page.html',
  styleUrls: ['./ion-item.page.scss'],
})
export class IonItemPage implements OnInit {

  constructor() { addIcons({ airplane, bluetooth, call, wifi });}

  ngOnInit() {
  }

}
