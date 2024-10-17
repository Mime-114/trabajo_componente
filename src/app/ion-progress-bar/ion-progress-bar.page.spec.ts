import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonProgressBarPage } from './ion-progress-bar.page';

describe('IonProgressBarPage', () => {
  let component: IonProgressBarPage;
  let fixture: ComponentFixture<IonProgressBarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonProgressBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
