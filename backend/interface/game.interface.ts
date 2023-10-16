import { Document } from 'mongoose';

export interface IGame extends Document {
  readonly gameName: string;
  readonly currentPlayer: string;
  readonly playersInvolved: string[];
  readonly boardState: string[][];
  finished: boolean;
}
