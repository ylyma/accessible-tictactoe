import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class MakeMoveSessionDto {
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @IsArray()
  @IsNotEmpty()
  boardState: string[][];

  @IsString()
  @IsNotEmpty()
  player: string;
}
