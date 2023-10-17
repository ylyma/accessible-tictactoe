import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Game {
  @Prop()
  gameName: string;

  @Prop()
  playersInvolved: string[];

  @Prop()
  boardState: string[][];

  @Prop()
  moves: {action: number[], player: string}[]

  @Prop()
  winner?: string[];

  @Prop()
  finished: boolean;

  @Prop()
  finishedAt?: Date;
}

export const GameSchema = SchemaFactory.createForClass(Game);
