import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class makeMoveSessionDto {
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @IsArray()
  @IsNotEmpty()
  boardState: string[][];
}
