import { Module } from '@nestjs/common';
import { MagicTheGatheringApiController } from './magic-the-gathering-api.controller';
import { MagicTheGatheringApiService } from './magic-the-gathering-api.service';

@Module({
  controllers: [MagicTheGatheringApiController],
  providers: [MagicTheGatheringApiService]
})
export class MagicTheGatheringApiModule {}
