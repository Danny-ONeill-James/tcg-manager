import { Test, TestingModule } from '@nestjs/testing';
import { PokemonCardsApiService } from './pokemon-cards-api.service';

describe('PokemonCardsApiService', () => {
  let service: PokemonCardsApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonCardsApiService],
    }).compile();

    service = module.get<PokemonCardsApiService>(PokemonCardsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
