import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainConnectivityViewerCardComponent } from './brain-connectivity-viewer-card.component';

describe('BrainConnectivityViewerCardComponent', () => {
  let component: BrainConnectivityViewerCardComponent;
  let fixture: ComponentFixture<BrainConnectivityViewerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainConnectivityViewerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainConnectivityViewerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
