import { Document } from 'mongoose';

export interface IGame extends Document {
  readonly gameName: string;
  playersInvolved: string[];
  boardState: string[][];
  moves: { action: string[][]; player: string };
  winner?: string[];
  finished: boolean;
  finishedAt?: Date;
}
