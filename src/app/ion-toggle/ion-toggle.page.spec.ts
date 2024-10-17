import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonTogglePage } from './ion-toggle.page';

describe('IonTogglePage', () => {
  let component: IonTogglePage;
  let fixture: ComponentFixture<IonTogglePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
