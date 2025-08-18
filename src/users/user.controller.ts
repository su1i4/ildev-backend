import { Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesMethodGuard } from 'src/common/guards/role-method.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard, RolesMethodGuard)
  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesMethodGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserEntity | null> {
    return this.userService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesMethodGuard)
  @Post()
  create(@Body() userDto: UserDto): Promise<UserEntity> {
    return this.userService.create(userDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.userService.update(+id, userDto);
  }

  @UseGuards(JwtAuthGuard, RolesMethodGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(+id);
  }
}
