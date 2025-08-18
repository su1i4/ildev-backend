import { Module } from '@nestjs/common';
import { StacksService } from './stacks.service';
import { StacksController } from './stacks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StackEntity } from './entities/stack.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StackEntity])],
  controllers: [StacksController],
  providers: [StacksService],
  exports: [StacksService],
})
export class StacksModule {}
