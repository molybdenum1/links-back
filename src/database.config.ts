import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'linksdb',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};
export default config;
