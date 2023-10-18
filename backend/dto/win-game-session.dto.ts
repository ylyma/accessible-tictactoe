import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class WinGameSessionDto {
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @IsString()
  @IsNotEmpty()
  winner: string;
}
