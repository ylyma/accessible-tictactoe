<<<<<<< HEAD
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
=======
import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  readonly gameName: string;

<<<<<<< HEAD
=======
  @IsString()
  @IsNotEmpty()
  readonly currentPlayer: string;

>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc
  @IsArray()
  @IsNotEmpty()
  readonly playersInvolved: string[];

  @IsArray()
  @IsNotEmpty()
<<<<<<< HEAD
  boardState: string[][];

  @IsArray()
  moves: { action: number[]; player: string }[];

  @IsArray()
  @IsOptional()
  winner: string[];
=======
  readonly boardState: string[][];
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc

  @IsBoolean()
  @IsNotEmpty()
  finished: boolean;
<<<<<<< HEAD

  @IsDate()
  @IsOptional()
  finishedAt: Date;
=======
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc
}
