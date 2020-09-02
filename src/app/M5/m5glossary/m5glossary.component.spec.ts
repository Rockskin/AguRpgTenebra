import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M5glossaryComponent } from './m5glossary.component';

describe('M5glossaryComponent', () => {
  let component: M5glossaryComponent;
  let fixture: ComponentFixture<M5glossaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M5glossaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M5glossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
