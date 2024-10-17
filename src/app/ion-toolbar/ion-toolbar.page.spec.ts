import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonToolbarPage } from './ion-toolbar.page';

describe('IonToolbarPage', () => {
  let component: IonToolbarPage;
  let fixture: ComponentFixture<IonToolbarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonToolbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
