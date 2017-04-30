import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPageComponent } from './lazy-page.component';

describe('LazyPageComponent', () => {
  let component: LazyPageComponent;
  let fixture: ComponentFixture<LazyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
