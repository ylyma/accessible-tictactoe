import { Document } from 'mongoose';

export interface IGame extends Document {
  readonly gameName: string;
<<<<<<< HEAD
  readonly playersInvolved: string[];
  boardState: string[][];
  moves: { action: number[]; player: string };
  winner?: string[];
  finished: boolean;
  finishedAt?: Date;
=======
  readonly currentPlayer: string;
  readonly playersInvolved: string[];
  readonly boardState: string[][];
  finished: boolean;
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc
}
