import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { AccessCardEntity } from '../../models/access-card/entities/access-card.entity';

export default class create implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(AccessCardEntity)().create();
  }
}
