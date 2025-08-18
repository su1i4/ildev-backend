import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StacksService } from './stacks.service';
import { StackDto } from './dto/stack.dto';
import { StackEntity } from './entities/stack.entity';

@Controller('stacks')
export class StacksController {
  constructor(private readonly stacksService: StacksService) {}

  @Get()
  async findAll(): Promise<StackEntity[]> {
    return this.stacksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<StackEntity | null> {
    return this.stacksService.findOne(id);
  }

  @Post()
  async create(@Body() stack: StackDto): Promise<StackEntity> {
    return this.stacksService.create(stack);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() stack: StackDto): Promise<StackEntity | null> {
    return this.stacksService.update(id, stack);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.stacksService.remove(id);
  }
}
