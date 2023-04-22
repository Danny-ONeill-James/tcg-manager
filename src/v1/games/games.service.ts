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
    private usersRepository: Repository<GameEntity>,
  ) {}

  async findOne(id: string): Promise<IGame> {
    const game: IGame = {
      name: 'Returned Single Game',
      slug: 'slughere',
      image: 'image Locations',
    };

    return game;
  }

  async findAll(): Promise<IGame[]> {
    const games: IGame[] = [
      {
        name: 'Returned Game 1',
        slug: 'slughere',
        image: 'image Locations',
      },
      {
        name: 'Returned Game 2',
        slug: 'slughere2',
        image: 'image Locations2',
      },
    ];

    return games;
  }

  async create(createGameDto: CreateGameDto) {
    const game: IGame = {
      name: 'Returned Single Game',
      slug: 'slughere',
      image: 'image Locations',
    };

    return game;
  }
}
