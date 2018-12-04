import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongitudinalViewerComponent } from './longitudinal-viewer.component';

describe('LongitudinalViewerComponent', () => {
  let component: LongitudinalViewerComponent;
  let fixture: ComponentFixture<LongitudinalViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongitudinalViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongitudinalViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
