import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningScoreboardComponent } from './morning-scoreboard.component';

describe('MorningScoreboardComponent', () => {
  let component: MorningScoreboardComponent;
  let fixture: ComponentFixture<MorningScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorningScoreboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
