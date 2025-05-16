import { Test, TestingModule } from '@nestjs/testing';
import { SearchPlacesService } from './search-places.service';

describe('SearchPlacesService', () => {
  let service: SearchPlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchPlacesService],
    }).compile();

    service = module.get<SearchPlacesService>(SearchPlacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
