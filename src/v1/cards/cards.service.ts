import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { CardEntity } from './entities/card.entity';
import { ICard } from './interface/card.interface';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
  ) {}

  async findAll(): Promise<ICard[]> {
    return this.cardRepository.find({
      relations: { set: { series: { game: true } } },
    });
  }

  async findOne(_id: string): Promise<ICard> {
    return this.cardRepository.findOne({
      where: { id: _id },
      relations: { set: { series: { game: true } } },
    });
  }

  findOneBySlug(_slug: string): Promise<ICard> {
    return this.cardRepository.findOne({
      where: { slug: _slug },
      relations: { set: { series: { game: true } } },
    });
  }

  async create(createCardDto: CreateCardDto) {
    const newCard = this.cardRepository.create({
      ...createCardDto,
    });
    return this.cardRepository.save(newCard);
  }

  async remove(id: string) {
    return this.cardRepository.delete(id);
  }
}
