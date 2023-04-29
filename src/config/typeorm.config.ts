import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * Local Postgres
 */

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'secretpw',
  database: 'app',
  autoLoadEntities: true,
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};
