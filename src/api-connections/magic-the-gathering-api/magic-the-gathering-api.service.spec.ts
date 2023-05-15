import { Test, TestingModule } from '@nestjs/testing';
import { MagicTheGatheringApiService } from './magic-the-gathering-api.service';

describe('MagicTheGatheringApiService', () => {
  let service: MagicTheGatheringApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MagicTheGatheringApiService],
    }).compile();

    service = module.get<MagicTheGatheringApiService>(MagicTheGatheringApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
