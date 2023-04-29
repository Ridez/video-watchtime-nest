import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWatchtimeDto {
  @IsNotEmpty()
  @IsNumber()
  watchtime!: number;

  @IsNotEmpty()
  @IsString()
  videoId!: string;
}
