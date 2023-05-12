import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { SetEntity } from '../sets/entities/set.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { CardEntity } from './entities/card.entity';
import { ICard } from './interface/card.interface';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
    @InjectRepository(SetEntity)
    private setRepository: Repository<SetEntity>,
  ) {}

  async findAll(): Promise<ICard[]> {
    return this.cardRepository.find({
      relations: {
        set: {
          series: {
            game: true,
          },
        },
      },
    });
  }

  async findOne(_id: string): Promise<ICard> {
    return this.cardRepository.findOne({
      where: { id: _id },
      relations: { set: { series: { game: true } } },
    });
  }

  async findForActiveSearch(_searchTerm: string): Promise<ICard[]> {
    return this.cardRepository.find({
      where: { name: Like(`%${_searchTerm}%`) },
      relations: { set: { series: { game: true } } },
    });
  }

  findOneBySlug(_slug: string): Promise<ICard> {
    return this.cardRepository.findOne({
      where: { slug: _slug },
      relations: { set: { series: { game: true } } },
    });
  }

  async findAllCardsInSet(_slug: string): Promise<ICard[]> {
    const cards: ICard[] = await this.cardRepository.find({
      where: {
        set: {
          slug: _slug,
        },
      },
      relations: { set: { series: { game: true } } },
    });

    return cards;
  }

  async create(createCardDto: CreateCardDto) {
    const newCard = this.cardRepository.create({
      ...createCardDto,
    });
    return this.cardRepository.save(newCard);
  }

  async update(inputId: string, updateCardDto: CreateCardDto) {
    const updateCardWithEditDetails: CreateCardDto = {
      ...updateCardDto,
    };
    return this.cardRepository.update(inputId, updateCardWithEditDetails);
  }

  async remove(id: string) {
    return this.cardRepository.delete(id);
  }
}
