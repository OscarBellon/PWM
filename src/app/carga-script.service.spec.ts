import { TestBed } from '@angular/core/testing';

import { CargaScriptService } from './carga-script.service';

describe('CargaScriptService', () => {
  let service: CargaScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
