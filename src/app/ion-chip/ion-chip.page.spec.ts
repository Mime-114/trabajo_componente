import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonChipPage } from './ion-chip.page';

describe('IonChipPage', () => {
  let component: IonChipPage;
  let fixture: ComponentFixture<IonChipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
