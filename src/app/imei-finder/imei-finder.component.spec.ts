import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImeiFinderComponent } from './imei-finder.component';

describe('ImeiFinderComponent', () => {
  let component: ImeiFinderComponent;
  let fixture: ComponentFixture<ImeiFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImeiFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImeiFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
