import { Test, TestingModule } from '@nestjs/testing';
import { WatchtimeGateway } from './watchtime.gateway';
import { WatchtimeService } from './watchtime.service';

describe('WatchtimeGateway', () => {
  let gateway: WatchtimeGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchtimeGateway, WatchtimeService],
    }).compile();

    gateway = module.get<WatchtimeGateway>(WatchtimeGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
