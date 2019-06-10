import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningBetaComponent } from './warning-beta.component';

describe('WarningBetaComponent', () => {
  let component: WarningBetaComponent;
  let fixture: ComponentFixture<WarningBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
