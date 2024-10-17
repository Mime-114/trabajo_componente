import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonDatetimePage } from './ion-datetime.page';

describe('IonDatetimePage', () => {
  let component: IonDatetimePage;
  let fixture: ComponentFixture<IonDatetimePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonDatetimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
