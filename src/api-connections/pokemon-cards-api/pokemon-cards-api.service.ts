import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonCardsApiService {
  constructor(
    @InjectRepository(CardEntity)
    private cardsRepository: Repository<CardEntity>,
  ) {}

  async getSetsList() {
    const config = {
      headers: {
        'X-Api-Key': process.env.POKEMON_TCG_IO_KEY,
      },
    };
    const url = `https://api.pokemontcg.io/v2/sets`;

    return await axios
      .get(url, config)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => console.log(err));
  }
}
