import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  readonly gameName: string;

  @IsArray()
  @IsNotEmpty()
  playersInvolved: string[];

  @IsArray()
  @IsNotEmpty()
  boardState: string[][];

  @IsArray()
  @IsOptional()
  moves: { action: number[]; player: string }[];

  @IsArray()
  @IsOptional()
  winner: string[];

  @IsBoolean()
  @IsNotEmpty()
  finished: boolean;

  @IsDate()
  @IsOptional()
  finishedAt: Date;
}
