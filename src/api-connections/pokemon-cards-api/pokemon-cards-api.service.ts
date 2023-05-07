import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { SetEntity } from 'src/v1/sets/entities/set.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonCardsApiService {
  constructor(
    @InjectRepository(SetEntity)
    private cardsRepository: Repository<SetEntity>,
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
