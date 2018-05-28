import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDislikeComponent } from './quote-dislike.component';

describe('QuoteDislikeComponent', () => {
  let component: QuoteDislikeComponent;
  let fixture: ComponentFixture<QuoteDislikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDislikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
