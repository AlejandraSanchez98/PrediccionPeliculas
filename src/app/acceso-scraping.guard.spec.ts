import { TestBed, async, inject } from '@angular/core/testing';

import { AccesoScrapingGuard } from './acceso-scraping.guard';

describe('AccesoScrapingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesoScrapingGuard]
    });
  });

  it('should ...', inject([AccesoScrapingGuard], (guard: AccesoScrapingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
