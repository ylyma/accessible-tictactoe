import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

type Move = {
  action: string[][];
  player: string;
};
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
  moves: Move[];

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
