import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonSelectPage } from './ion-select.page';

describe('IonSelectPage', () => {
  let component: IonSelectPage;
  let fixture: ComponentFixture<IonSelectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
