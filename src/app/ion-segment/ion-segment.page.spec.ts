import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonSegmentPage } from './ion-segment.page';

describe('IonSegmentPage', () => {
  let component: IonSegmentPage;
  let fixture: ComponentFixture<IonSegmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonSegmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
