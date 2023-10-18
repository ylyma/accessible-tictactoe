import { Document } from 'mongoose';

type Move = {
  action: string[][];
  player: string;
};
export interface IGame extends Document {
  readonly gameName: string;
  playersInvolved: string[];
  boardState: string[][];
  moves: Move[];
  winner?: string[];
  finished: boolean;
  finishedAt?: Date;
}
