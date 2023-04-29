import { Module } from '@nestjs/common';
import { WatchtimeService } from './watchtime.service';
import { WatchtimeGateway } from './watchtime.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Watchtime } from './entities/watchtime.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Watchtime])],
  providers: [WatchtimeGateway, WatchtimeService],
})
export class WatchtimeModule {}
