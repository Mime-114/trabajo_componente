import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonCheckboxPage } from './ion-checkbox.page';

describe('IonCheckboxPage', () => {
  let component: IonCheckboxPage;
  let fixture: ComponentFixture<IonCheckboxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonCheckboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
