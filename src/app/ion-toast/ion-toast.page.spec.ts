import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonToastPage } from './ion-toast.page';

describe('IonToastPage', () => {
  let component: IonToastPage;
  let fixture: ComponentFixture<IonToastPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonToastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
