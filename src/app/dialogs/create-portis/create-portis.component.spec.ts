import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePortisComponent } from './create-portis.component';

describe('CreatePortisComponent', () => {
  let component: CreatePortisComponent;
  let fixture: ComponentFixture<CreatePortisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePortisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePortisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
