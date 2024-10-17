import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';


@Component({
  selector: 'app-ion-tabs',
  templateUrl: './ion-tabs.page.html',
  styleUrls: ['./ion-tabs.page.scss'],
})
export class IonTabsPage implements OnInit {

  constructor() {addIcons({ library, playCircle, radio, search }); }

  ngOnInit() {
  }

}
