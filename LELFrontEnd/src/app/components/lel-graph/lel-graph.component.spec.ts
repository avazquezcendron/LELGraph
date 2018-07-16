import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LelGraphComponent } from './lel-graph.component';

describe('LelGraphComponent', () => {
  let component: LelGraphComponent;
  let fixture: ComponentFixture<LelGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LelGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LelGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
