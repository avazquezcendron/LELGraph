import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LelStatsComponent } from './lel-stats.component';

describe('LelStatsComponent', () => {
  let component: LelStatsComponent;
  let fixture: ComponentFixture<LelStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LelStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LelStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
