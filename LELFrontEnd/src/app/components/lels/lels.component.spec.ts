import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LelsComponent } from './lels.component';

describe('LelsComponent', () => {
  let component: LelsComponent;
  let fixture: ComponentFixture<LelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
