import { TestBed } from '@angular/core/testing';
import { brandService } from './brand.service';



describe('BrandService', () => {
  let service: brandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(brandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
