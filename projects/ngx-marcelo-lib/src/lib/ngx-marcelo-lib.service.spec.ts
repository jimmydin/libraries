import { TestBed } from '@angular/core/testing';

import { NgxMarceloLibService } from './ngx-marcelo-lib.service';

describe('NgxMarceloLibService', () => {
  let service: NgxMarceloLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMarceloLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
