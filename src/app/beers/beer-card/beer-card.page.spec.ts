import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerCardPage } from './beer-card.page';

describe('BeerCardPage', () => {
  let component: BeerCardPage;
  let fixture: ComponentFixture<BeerCardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeerCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
