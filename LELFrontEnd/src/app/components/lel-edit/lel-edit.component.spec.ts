import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LelEditComponent } from './lel-edit.component';

describe('LelEditComponent', () => {
  let component: LelEditComponent;
  let fixture: ComponentFixture<LelEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LelEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
