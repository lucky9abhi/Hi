/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouterChangeDetectionService } from './router-change-detection.service';

describe('Service: RouterChangeDetection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterChangeDetectionService]
    });
  });

  it('should ...', inject([RouterChangeDetectionService], (service: RouterChangeDetectionService) => {
    expect(service).toBeTruthy();
  }));
});
