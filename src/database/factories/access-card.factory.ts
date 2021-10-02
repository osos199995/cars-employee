import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { AccessCardEntity } from '../../models/access-card/entities/access-card.entity';

define(AccessCardEntity, (faker: typeof Faker) => {
  const accessCardEntity = new AccessCardEntity();
  accessCardEntity.accesscardId = faker.random.uuid();
  accessCardEntity.credit = 10;

  return accessCardEntity;
});
