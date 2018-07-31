import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactoEditComponent } from './impacto-edit.component';

describe('ImpactoEditComponent', () => {
  let component: ImpactoEditComponent;
  let fixture: ComponentFixture<ImpactoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
