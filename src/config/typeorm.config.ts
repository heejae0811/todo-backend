import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'stick123!',
  database: 'postgres',
  entities: [__dirname + './../**/*.entity.{js,ts}'],
  logging: true,
};
