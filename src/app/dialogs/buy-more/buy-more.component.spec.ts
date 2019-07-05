import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMoreComponent } from './buy-more.component';

describe('BuyMoreComponent', () => {
  let component: BuyMoreComponent;
  let fixture: ComponentFixture<BuyMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
