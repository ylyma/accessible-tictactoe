import { Document } from 'mongoose';

export interface IGame extends Document {
  readonly gameName: string;
  readonly playersInvolved: string[];
  boardState: string[][];
  moves: { action: number[]; player: string };
  winner?: string[];
  finished: boolean;
  finishedAt?: Date;
}
