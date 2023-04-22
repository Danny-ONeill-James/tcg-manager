import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { GameEntity } from './entities/game.entity';
import { IGame } from './interface/games.interface';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
  ) {}

  async findOne(id: string): Promise<IGame> {
    const game: IGame = {
      id: 'one',
      name: 'Returned Single Game',
      slug: 'slughere',
      image: 'image Locations',
    };

    return game;
  }

  async findAll(): Promise<IGame[]> {
    return this.gameRepository.find();
  }

  async create(createGameDto: CreateGameDto) {
    const newGame = this.gameRepository.create({
      ...createGameDto,
    });

    return this.gameRepository.save(newGame);
  }
}
