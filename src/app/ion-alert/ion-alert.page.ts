import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ion-alert',
  templateUrl: './ion-alert.page.html',
  styleUrls: ['./ion-alert.page.scss'],
})
export class IonAlertPage implements OnInit {

  alertButtons = ['Action'];

  constructor(private alertController: AlertController) { }

  isAlertOpen = false;
  alertButtons_2 = ['Action'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }

    public alertButtons_3 = ['OK'];
    public alertInputs = [
      {
        placeholder: 'Name',
      },
      {
        placeholder: 'Nickname (max 8 characters)',
        attributes: {
          maxlength: 8,
        },
      },
      {
        type: 'number',
        placeholder: 'Age',
        min: 1,
        max: 100,
      },
      {
        type: 'textarea',
        placeholder: 'A little about yourself',
      },
    ];
    

    public alertButtons_4 = ['OK'];
    public alertInputs_2 = [
      {
        label: 'Red',
        type: 'radio',
        value: 'red',
      },
      {
        label: 'Blue',
        type: 'radio',
        value: 'blue',
      },
      {
        label: 'Green',
        type: 'radio',
        value: 'green',
      },
    ];

    public alertButtons_5 = [
      {
        text: 'No',
        cssClass: 'alert-button-cancel',
      },
      {
        text: 'Yes',
        cssClass: 'alert-button-confirm',
      },
    ];
}
