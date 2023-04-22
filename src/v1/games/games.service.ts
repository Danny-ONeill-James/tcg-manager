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

  async findAll(): Promise<IGame[]> {
    return this.gameRepository.find();
  }

  async findOne(_id: string): Promise<IGame> {
    return this.gameRepository.findOne({
      where: { id: _id },
    });
  }

  findOneBySlug(_slug: string): Promise<IGame> {
    return this.gameRepository.findOne({
      where: { slug: _slug },
    });
  }

  async create(createGameDto: CreateGameDto) {
    const newGame = this.gameRepository.create({
      ...createGameDto,
    });

    return this.gameRepository.save(newGame);
  }

  async remove(id: string) {
    return this.gameRepository.delete(id);
  }
}
