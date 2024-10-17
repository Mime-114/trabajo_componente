import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-ion-infine-scroll',
  templateUrl: './ion-infine-scroll.page.html',
  styleUrls: ['./ion-infine-scroll.page.scss'],
})
export class IonInfineScrollPage implements OnInit {
  items: string[] = []; // Especifica que 'items' es un array de strings

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(`Item ${i}`);
    }
  }

}
