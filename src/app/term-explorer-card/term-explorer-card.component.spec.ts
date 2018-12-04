import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermExplorerCardComponent } from './term-explorer-card.component';

describe('TermExplorerCardComponent', () => {
  let component: TermExplorerCardComponent;
  let fixture: ComponentFixture<TermExplorerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermExplorerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermExplorerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
