import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Game {
  @Prop()
  gameName: string;

  @Prop()
  currentPlayer: string;

  @Prop()
  playersInvolved: string[];

  @Prop()
  boardState: string[][];

  @Prop()
  finished: boolean;
}

export const GameSchema = SchemaFactory.createForClass(Game);
