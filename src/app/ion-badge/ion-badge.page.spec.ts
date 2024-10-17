import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonBadgePage } from './ion-badge.page';

describe('IonBadgePage', () => {
  let component: IonBadgePage;
  let fixture: ComponentFixture<IonBadgePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
