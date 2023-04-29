import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWatchtimeDto {
  @IsNotEmpty()
  @IsNumber()
  watchtime!: number;
}
