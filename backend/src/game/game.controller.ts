import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateGameDto } from 'dto/create-game.dto';
import { GameService } from './game.service';
import { EditGameDto } from 'dto/edit-game.sto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('/post')
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

  @Put('/:id/:player')
  async editGame(
    @Res() Response,
    @Param('id') id: string,
    @Param('player') player: string,
    @Body() editGameDto: EditGameDto,
  ) {
    try {
      const game = await this.gameService.editGame(id, player, editGameDto);
      return Response.status(HttpStatus.OK).json({
        message: 'Game update',
        game,
      });
    } catch (err) {
      return Response.status(err.status).json(err.response);
    }
  }

  @Get('/get')
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

  @Get('/past')
  async getPastGames(@Res() response) {
    try {
      const games = await this.gameService.getGames();
      return response.status(HttpStatus.OK).json({
        message: 'Games loaded',
        games: games.filter((game) => game.finished === true),
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
