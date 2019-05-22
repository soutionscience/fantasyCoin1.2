import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTeamPageComponent } from './user-team-page.component';

describe('UserTeamPageComponent', () => {
  let component: UserTeamPageComponent;
  let fixture: ComponentFixture<UserTeamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTeamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
