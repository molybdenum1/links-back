import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './database.config';
import { LinkModule } from './link/Link.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), LinkModule],
})
export class AppModule {}
