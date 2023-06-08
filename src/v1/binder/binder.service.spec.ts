import { Test, TestingModule } from '@nestjs/testing';
import { BinderService } from './binder.service';

describe('BinderService', () => {
  let service: BinderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinderService],
    }).compile();

    service = module.get<BinderService>(BinderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
