import { Test, TestingModule } from '@nestjs/testing';
import { BinderController } from './binder.controller';

describe('BinderController', () => {
  let controller: BinderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BinderController],
    }).compile();

    controller = module.get<BinderController>(BinderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
