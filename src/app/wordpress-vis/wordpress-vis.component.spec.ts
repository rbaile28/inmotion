import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressVisComponent } from './wordpress-vis.component';

describe('WordpressVisComponent', () => {
  let component: WordpressVisComponent;
  let fixture: ComponentFixture<WordpressVisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressVisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
