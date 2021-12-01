import { TestBed } from '@angular/core/testing';

import { AngularstudioComponentFactoryService } from './angularstudio-component-factory.service';

describe('AngularstudioComponentFactoryService', () => {
  let service: AngularstudioComponentFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularstudioComponentFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
