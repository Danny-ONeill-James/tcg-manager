import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { GameEntity } from './entities/game.entity';
import { IGame } from './interface/games.interface';
export declare class GamesService {
    private gameRepository;
    constructor(gameRepository: Repository<GameEntity>);
    findAll(): Promise<IGame[]>;
    findOne(_id: string): Promise<IGame>;
    findOneBySlug(_slug: string): Promise<IGame>;
    create(createGameDto: CreateGameDto): Promise<GameEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
