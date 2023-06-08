import { CommandService } from './command.service';
export declare class CommandController {
    private commandService;
    constructor(commandService: CommandService);
    checkAllSets(gameSlug: string): Promise<string>;
    checkCardsInSet(slug: string): Promise<any>;
    checkAllCardsInSet(): Promise<void>;
}
