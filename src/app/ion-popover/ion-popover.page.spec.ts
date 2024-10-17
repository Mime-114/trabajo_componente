import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonPopoverPage } from './ion-popover.page';

describe('IonPopoverPage', () => {
  let component: IonPopoverPage;
  let fixture: ComponentFixture<IonPopoverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
