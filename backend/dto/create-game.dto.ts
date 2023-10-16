import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

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

  @IsArray()
  @IsOptional()
  winner: string[];

  @IsBoolean()
  @IsNotEmpty()
  finished: boolean;
}
