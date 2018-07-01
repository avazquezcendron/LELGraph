import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimboloEditComponent } from './simbolo-edit.component';

describe('SimboloEditComponent', () => {
  let component: SimboloEditComponent;
  let fixture: ComponentFixture<SimboloEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimboloEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimboloEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
