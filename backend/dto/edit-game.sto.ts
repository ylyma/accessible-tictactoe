import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditGameDto {
  @IsArray()
  @IsNotEmpty()
  playersInvolved: string[];

  @IsArray()
  @IsNotEmpty()
  boardState: string[][];

  @IsArray()
  @IsNotEmpty()
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