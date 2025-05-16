import { Test, TestingModule } from '@nestjs/testing';
import { SearchPlacesController } from './search-places.controller';

describe('SearchPlacesController', () => {
  let controller: SearchPlacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchPlacesController],
    }).compile();

    controller = module.get<SearchPlacesController>(SearchPlacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
