import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StackEntity } from './entities/stack.entity';
import { StackDto } from './dto/stack.dto';

@Injectable()
export class StacksService {
  constructor(
    @InjectRepository(StackEntity) private stacksRepo: Repository<StackEntity>,
  ) {}

  async findAll(): Promise<StackEntity[]> {
    return this.stacksRepo.find();
  }

  async findOne(id: number): Promise<StackEntity | null> {
    return this.stacksRepo.findOneBy({ id });
  }

  async create(stack: StackDto): Promise<StackEntity> {
    const newStack = this.stacksRepo.create(stack);
    return this.stacksRepo.save(newStack);
  }
  

  async update(id: number, stack: StackDto): Promise<StackEntity | null> {
    await this.stacksRepo.update(id, stack);
    return this.stacksRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.stacksRepo.delete(id);
  }
}
