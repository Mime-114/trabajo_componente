import { Component,  } from '@angular/core';

@Component({
  selector: 'app-ion-datetime',
  templateUrl: './ion-datetime.page.html',
  styleUrls: ['./ion-datetime.page.scss'],
})
export class IonDatetimePage {

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;

  };

}
