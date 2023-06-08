import { CreateGameDto } from './dto/create-game.dto';
import { GamesService } from './games.service';
import { IGame } from './interface/games.interface';
export declare class GamesController {
    private gameService;
    constructor(gameService: GamesService);
    findAll(): Promise<IGame[]>;
    findOne(id: string): Promise<IGame>;
    findOneBySlug(slug: string): Promise<IGame>;
    create(createGameDto: CreateGameDto): Promise<IGame>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
