import { IGame } from 'interface/game.interface';
import { CreateGameDto } from './../../dto/create-game.dto';
import { Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EditGameDto } from 'dto/edit-game.sto';

@Injectable()
export class GameService {
  constructor(@InjectModel('Game') private gameModel: Model<IGame>) {}

  async createGame(createGameDto: CreateGameDto) {
    const newGame = await new this.gameModel(createGameDto);
    let id = new mongoose.Types.ObjectId();
    newGame._id = id;
    newGame.save();
    return id;
  }

  async editGame(id: string, player: string, editGameDto: EditGameDto) {
    const bs = editGameDto.boardState;
    let win = false;
    let finished = true;
    for (let i = 0; i < 3; i++) {
      // if (
      //   bs[i][0] == '' ||
      //   bs[i][1] == '' ||
      //   bs[i][2] == '' ||
      //   bs[0][i] == '' ||
      //   bs[1][i] == '' ||
      //   bs[2][i] == ''
      // ) {
      //   continue
      // }
      if (bs[i][0] == bs[i][1] && bs[i][1] == bs[i][2]) {
        if (bs[i][0] == '' || bs[i][1] == '' || bs[i][2] == '') {
          continue;
        }
        win = true;
      }
      if (bs[0][i] == bs[1][i] && bs[1][i] == bs[2][i]) {
        if (bs[0][i] == '' || bs[1][i] == '' || bs[2][i] == '') {
          continue;
        }
        win = true;
      }
    }
    if (bs[0][0] == bs[1][1] && bs[1][1] == bs[2][2]) {
      if (bs[0][0] !== '') {
        win = true;
      }
    }
    if (bs[2][0] == bs[1][1] && bs[1][1] == bs[0][2]) {
      if (bs[2][0] !== '') {
        win = true;
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (bs[i][j] == '') {
          finished = false;
        }
      }
    }
    editGameDto.finished = win || finished;
    editGameDto.finishedAt = win || finished ? new Date() : undefined;
    const newMove = { action: editGameDto.boardState, player: player };
    const currMoves = await this.gameModel.findById(id);
    currMoves.moves.push(newMove);
    if (win) {
      editGameDto.winner = Array(player);
    } else if (finished) {
      editGameDto.winner = (await this.gameModel.findById(id)).playersInvolved;
    }
    const game = await this.gameModel.findByIdAndUpdate(id, editGameDto, {
      new: true,
    });

    return { state: win, winner: editGameDto.winner };
  }

  async getGames() {
    const games = await this.gameModel.find();
    return games;
  }
}
