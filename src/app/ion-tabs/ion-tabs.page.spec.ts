import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonTabsPage } from './ion-tabs.page';

describe('IonTabsPage', () => {
  let component: IonTabsPage;
  let fixture: ComponentFixture<IonTabsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
