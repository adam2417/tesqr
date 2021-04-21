import { TestBed } from '@angular/core/testing';

import { QrisapiService } from './qrisapi.service';

describe('QrisapiService', () => {
  let service: QrisapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrisapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
