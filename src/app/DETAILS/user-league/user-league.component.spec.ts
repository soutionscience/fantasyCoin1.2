import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeagueComponent } from './user-league.component';

describe('UserLeagueComponent', () => {
  let component: UserLeagueComponent;
  let fixture: ComponentFixture<UserLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
