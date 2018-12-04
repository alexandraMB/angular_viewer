import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermSearchContainerComponent } from './term-search-container.component';

describe('TermSearchContainerComponent', () => {
  let component: TermSearchContainerComponent;
  let fixture: ComponentFixture<TermSearchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermSearchContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
