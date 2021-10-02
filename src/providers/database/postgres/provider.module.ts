// import { DatabaseType } from 'typeorm';
// import { Module } from '@nestjs/common';
// import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
// import { PostgresConfigModule } from '../../../config/database/postgres/config.module';
// import { PostgresConfigService } from '../../../config/database/postgres/config.service';
// import { Category } from '../../../models/car/car.entity';
//
// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [PostgresConfigModule],
//       useFactory: async (postgresConfigService: PostgresConfigService) => ({
//         type: 'postgres' as DatabaseType,
//         host: postgresConfigService.postgres_host,
//         port: postgresConfigService.postgre_port,
//         username: postgresConfigService.postgres_username,
//         password: postgresConfigService.postgres_password,
//         database: postgresConfigService.postgres_database,
//         synchronize: postgresConfigService.postgres_synchronize,
//         entities: [
//          Category
//         ],
//       }),
//       inject: [PostgresConfigService],
//     } as TypeOrmModuleAsyncOptions),
//   ],
//
// })
// export class PostgresDatabaseProviderModule {}
