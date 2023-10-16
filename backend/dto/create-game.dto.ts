import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  readonly gameName: string;

  @IsString()
  @IsNotEmpty()
  readonly currentPlayer: string;

  @IsArray()
  @IsNotEmpty()
  readonly playersInvolved: string[];

  @IsArray()
  @IsNotEmpty()
  readonly boardState: string[][];

  @IsBoolean()
  @IsNotEmpty()
  finished: boolean;
}
