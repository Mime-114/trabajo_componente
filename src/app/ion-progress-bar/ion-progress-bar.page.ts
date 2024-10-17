import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-progress-bar',
  templateUrl: './ion-progress-bar.page.html',
  styleUrls: ['./ion-progress-bar.page.scss'],
})
export class IonProgressBarPage{
  public buffer = 0.06;
  public progress = 0;

  constructor() {
    setInterval(() => {
      this.buffer += 0.06;
      this.progress += 0.06;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.buffer = 0.06;
          this.progress = 0;
        }, 1000);
      }
    }, 1000);
  }

}
