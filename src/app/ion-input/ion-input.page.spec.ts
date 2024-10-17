import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonInputPage } from './ion-input.page';

describe('IonInputPage', () => {
  let component: IonInputPage;
  let fixture: ComponentFixture<IonInputPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
