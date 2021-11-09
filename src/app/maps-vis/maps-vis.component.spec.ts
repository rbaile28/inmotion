import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsVisComponent } from './maps-vis.component';

describe('MapsVisComponent', () => {
  let component: MapsVisComponent;
  let fixture: ComponentFixture<MapsVisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsVisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
