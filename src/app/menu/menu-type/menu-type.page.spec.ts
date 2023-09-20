import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuTypePage } from './menu-type.page';

describe('MenuTypePage', () => {
  let component: MenuTypePage;
  let fixture: ComponentFixture<MenuTypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
