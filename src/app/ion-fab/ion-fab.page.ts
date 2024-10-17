import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';

@Component({
  selector: 'app-ion-fab',
  templateUrl: './ion-fab.page.html',
  styleUrls: ['./ion-fab.page.scss'],
})
export class IonFabPage implements OnInit {

  constructor() { addIcons({ add }); 
  addIcons({ add, chevronBack, chevronDown, chevronForward, chevronUp });}

  ngOnInit() {
  }
  
}
