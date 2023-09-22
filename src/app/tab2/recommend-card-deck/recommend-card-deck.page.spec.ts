import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendCardDeckPage } from './recommend-card-deck.page';

describe('RecommendCardDeckPage', () => {
  let component: RecommendCardDeckPage;
  let fixture: ComponentFixture<RecommendCardDeckPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecommendCardDeckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
