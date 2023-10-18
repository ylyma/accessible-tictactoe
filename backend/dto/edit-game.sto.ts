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
export class EditGameDto {
  @IsArray()
  @IsOptional()
  playersInvolved: string[];

  @IsArray()
  @IsNotEmpty()
  boardState: string[][];

  @IsString()
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
