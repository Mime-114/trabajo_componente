import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonAlertPage } from './ion-alert.page';

describe('IonAlertPage', () => {
  let component: IonAlertPage;
  let fixture: ComponentFixture<IonAlertPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
