import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonContPage } from './ion-cont.page';

describe('IonContPage', () => {
  let component: IonContPage;
  let fixture: ComponentFixture<IonContPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonContPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
