import { Test, TestingModule } from '@nestjs/testing';
import { WatchtimeService } from './watchtime.service';

describe('WatchtimeService', () => {
  let service: WatchtimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchtimeService],
    }).compile();

    service = module.get<WatchtimeService>(WatchtimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
