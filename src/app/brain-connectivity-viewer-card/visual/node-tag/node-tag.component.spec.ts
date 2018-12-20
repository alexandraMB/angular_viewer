import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTagComponent } from './node-tag.component';

describe('NodeTagComponent', () => {
  let component: NodeTagComponent;
  let fixture: ComponentFixture<NodeTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
