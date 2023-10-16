import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateGameDto } from 'dto/create-game.dto';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  async createGame(@Res() response, @Body() createGameDto: CreateGameDto) {
    try {
      const newGame = await this.gameService.createGame(createGameDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Game saved',
        newGame,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Game could not be saved',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getGames(@Res() response) {
    try {
      const games = await this.gameService.getGames();
      return response.status(HttpStatus.OK).json({
        message: 'Games loaded',
        games,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
