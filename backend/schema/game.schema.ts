import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

<<<<<<< HEAD
@Schema({ timestamps: true })
=======
@Schema()
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc
export class Game {
  @Prop()
  gameName: string;

  @Prop()
<<<<<<< HEAD
=======
  currentPlayer: string;

  @Prop()
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc
  playersInvolved: string[];

  @Prop()
  boardState: string[][];

  @Prop()
<<<<<<< HEAD
  winner?: string[];

  @Prop()
  finished: boolean;

  @Prop()
  finishedAt?: Date;
=======
  finished: boolean;
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc
}

export const GameSchema = SchemaFactory.createForClass(Game);
