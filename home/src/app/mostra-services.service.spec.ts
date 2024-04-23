import { TestBed } from '@angular/core/testing';

import { MostraServicesService } from './mostra-services.service';

describe('MostraServicesService', () => {
  let service: MostraServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostraServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
