import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from './entity/link.entity';
import { CreateLinkDto } from './dto/create-link.dto';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link) private linkRepository: Repository<Link>,
  ) {}
  async create(linkDto: CreateLinkDto): Promise<Link> {
    const link = await this.linkRepository.create(linkDto);
    return link;
  }
  async getAll(): Promise<Link[]> {
    const links = await this.linkRepository.find();
    return links;
  }
  async update(id: number, link: Partial<Link>): Promise<Link> {
    await this.linkRepository.update(id, link);
    return this.linkRepository.findOne({ where: [{ id: id }] });
  }
  async delete(id: number): Promise<void> {
    await this.linkRepository.delete(id);
  }
}
