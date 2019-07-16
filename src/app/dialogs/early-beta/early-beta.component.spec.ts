import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyBetaComponent } from './early-beta.component';

describe('EarlyBetaComponent', () => {
  let component: EarlyBetaComponent;
  let fixture: ComponentFixture<EarlyBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlyBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
