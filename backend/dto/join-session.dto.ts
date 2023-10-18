import { IsNotEmpty, IsString } from 'class-validator';

export class JoinSessionDto {
  @IsString()
  @IsNotEmpty()
  friendName: string;

  @IsString()
  @IsNotEmpty()
  roomId: string;
}
