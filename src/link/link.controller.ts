import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { LinkService } from './link.service';
import { Link } from './entity/link.entity';
import { log } from 'console';

@Controller('links')
export class LinkController {
  constructor(private linkService: LinkService) {}

  @Get()
  async getAll(): Promise<Link[]> {
    return this.linkService.getAll();
  }
  @Post()
  async create(@Body() link: Link): Promise<Link> {
    return this.linkService.create(link);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() link: Partial<Link>) {
    return this.linkService.update(id, link);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.linkService.delete(id);
  }
}
