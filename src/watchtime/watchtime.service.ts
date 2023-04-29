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

  async create(createWatchtimeDto: CreateWatchtimeDto) {
    const { videoId, watchtime } = createWatchtimeDto;

    const existingWatchtime = await this.watchtimeRepository.findOne({
      where: { videoId },
    });

    if (existingWatchtime) {
      existingWatchtime.watchtime += Math.round(createWatchtimeDto.watchtime);
      return this.watchtimeRepository.save(existingWatchtime);
    } else {
      return this.watchtimeRepository.save({
        watchtime: Math.round(watchtime),
        videoId,
      });
    }
  }
}
