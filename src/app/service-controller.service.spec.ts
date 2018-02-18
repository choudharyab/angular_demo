import { TestBed, inject } from '@angular/core/testing';

import { ServiceControllerService } from './service-controller.service';

describe('ServiceControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceControllerService]
    });
  });

  it('should be created', inject([ServiceControllerService], (service: ServiceControllerService) => {
    expect(service).toBeTruthy();
  }));
});
