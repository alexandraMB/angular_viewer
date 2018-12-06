import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelViewerCardComponent } from './bel-viewer-card.component';

describe('BelViewerCardComponent', () => {
  let component: BelViewerCardComponent;
  let fixture: ComponentFixture<BelViewerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelViewerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelViewerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
