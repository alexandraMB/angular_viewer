import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermExplorerContainerComponent } from './term-explorer-container.component';

describe('TermExplorerContainerComponent', () => {
  let component: TermExplorerContainerComponent;
  let fixture: ComponentFixture<TermExplorerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermExplorerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermExplorerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
