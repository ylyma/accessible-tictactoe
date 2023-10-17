import { IGame } from 'interface/game.interface';
import { CreateGameDto } from './../../dto/create-game.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GameService {
  constructor(@InjectModel('Game') private gameModel: Model<IGame>) {}

  async createGame(createGameDto: CreateGameDto) {
    const bs = createGameDto.boardState;
    let win = false;
    let finished = true;
    for (let i = 0; i < 3; i++) {
      if (bs[i][0] == bs[i][1] && bs[i][1] == bs[i][2]) {
        win = true;
      }
      if (bs[0][i] == bs[1][i] && bs[1][i] == bs[2][i]) {
        win = true;
      }
    }
    if (bs[0][0] == bs[1][1] && bs[1][1] == bs[2][2]) {
      win = true;
    }
    if (bs[2][0] == bs[1][1] && bs[1][1] == bs[0][2]) {
      win = true;
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (bs[i][j] == '') {
          finished = false;
        }
      }
    }

    createGameDto.finished = win || finished;
<<<<<<< HEAD
    createGameDto.finishedAt = win || finished ? new Date() : undefined;
    if (win) {
      createGameDto.winner = Array(createGameDto.currentPlayer);
=======
    if (win && finished) {
      createGameDto.winner = [createGameDto.currentPlayer];
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc
    } else if (finished) {
      createGameDto.winner = createGameDto.playersInvolved;
    }

    const newGame = await new this.gameModel(createGameDto);
    newGame.save();
    return { state: win, winner: createGameDto.winner };
  }

  async getGames() {
    const games = await this.gameModel.find();
    return games;
  }
}
