import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { close, closeCircle, pin } from 'ionicons/icons';


@Component({
  selector: 'app-ion-chip',
  templateUrl: './ion-chip.page.html',
  styleUrls: ['./ion-chip.page.scss'],
})
export class IonChipPage implements OnInit {

  constructor() {   addIcons({ close, closeCircle, pin });}

  ngOnInit() {
  }

}
