import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonNavPage } from './ion-nav.page';

describe('IonNavPage', () => {
  let component: IonNavPage;
  let fixture: ComponentFixture<IonNavPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
