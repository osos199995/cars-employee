import { EntityRepository, Repository } from 'typeorm';
import { AccessCardEntity } from './entities/access-card.entity';
import {validate} from "class-validator";
import { NotFoundException } from '@nestjs/common';

@EntityRepository(AccessCardEntity)
export class AccessCardRepository extends Repository<AccessCardEntity> {
  async accessCard(accesscardId: string): Promise<AccessCardEntity> {
    return this.findOne({ accesscardId });
  }

  async accessCards(): Promise<AccessCardEntity[]> {
    const result = this.find({});
    return await result;
  }

  async welcomeCredit(accesscardId) {
    try {
      const accessCard: AccessCardEntity = await this.findOne({ accesscardId });
      accessCard.credit = accessCard.credit + 10;
      accessCard.save();
      return await accessCard;
    } catch (e) {
      e.message;
    }
  }

  async charge(accesscardId): Promise<boolean> {
    try {
      const accessCard: AccessCardEntity = await this.findOne({ accesscardId });
      if (accessCard.credit < 4) throw new NotFoundException('you dont have credit to pay this pill')
      accessCard.credit = accessCard.credit - 4;

      accessCard.save();
      return true;
    } catch (e) {
      e.message;
    }
  }
}
