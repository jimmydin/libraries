import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMarceloLibComponent } from './ngx-marcelo-lib.component';

describe('NgxMarceloLibComponent', () => {
  let component: NgxMarceloLibComponent;
  let fixture: ComponentFixture<NgxMarceloLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMarceloLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMarceloLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
