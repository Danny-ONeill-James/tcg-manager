import { Test, TestingModule } from '@nestjs/testing';
import { MagicTheGatheringApiController } from './magic-the-gathering-api.controller';

describe('MagicTheGatheringApiController', () => {
  let controller: MagicTheGatheringApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MagicTheGatheringApiController],
    }).compile();

    controller = module.get<MagicTheGatheringApiController>(MagicTheGatheringApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
