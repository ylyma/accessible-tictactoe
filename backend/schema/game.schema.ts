import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

type Move = {
  action: string[][];
  player: string;
};
@Schema({ timestamps: true })
export class Game {
  @Prop()
  gameName: string;

  @Prop()
  playersInvolved: string[];

  @Prop()
  boardState: string[][];

  @Prop()
  moves: Move[];

  @Prop()
  winner?: string[];

  @Prop()
  finished: boolean;

  @Prop()
  finishedAt?: Date;
}

export const GameSchema = SchemaFactory.createForClass(Game);
