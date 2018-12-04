import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermTreeComponent } from './term-tree.component';

describe('TermTreeComponent', () => {
  let component: TermTreeComponent;
  let fixture: ComponentFixture<TermTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
