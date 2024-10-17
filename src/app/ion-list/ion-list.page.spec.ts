import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonListPage } from './ion-list.page';

describe('IonListPage', () => {
  let component: IonListPage;
  let fixture: ComponentFixture<IonListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
