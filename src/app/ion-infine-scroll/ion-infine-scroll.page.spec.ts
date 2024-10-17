import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonInfineScrollPage } from './ion-infine-scroll.page';

describe('IonInfineScrollPage', () => {
  let component: IonInfineScrollPage;
  let fixture: ComponentFixture<IonInfineScrollPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonInfineScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
