import { Test, TestingModule } from '@nestjs/testing';
import { PokemonCardsApiController } from './pokemon-cards-api.controller';

describe('PokemonCardsApiController', () => {
  let controller: PokemonCardsApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonCardsApiController],
    }).compile();

    controller = module.get<PokemonCardsApiController>(PokemonCardsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
