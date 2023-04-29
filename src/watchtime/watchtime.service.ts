import { Injectable } from '@nestjs/common';
import { CreateWatchtimeDto } from './dto/create-watchtime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Watchtime } from './entities/watchtime.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WatchtimeService {
  constructor(
    @InjectRepository(Watchtime)
    private readonly watchtimeRepository: Repository<Watchtime>,
  ) {}

  create(createWatchtimeDto: CreateWatchtimeDto) {
    const { watchtime } = createWatchtimeDto;

    return this.watchtimeRepository.save({ watchtime: Math.round(watchtime) });
  }
}
