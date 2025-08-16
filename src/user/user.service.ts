import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { hash, compare, genSalt } from 'bcrypt';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  async findOne(id: number): Promise<User | null> {
    return this.usersRepo.findOneBy({ id });
  }

  async create(createUserDto: UserDto): Promise<User> {
    const salt = await genSalt();
    const hashedPassword = await hash(createUserDto.password, salt);

    const user = this.usersRepo.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.usersRepo.save(user);
  }
  async update(id: number, userData: UserDto): Promise<User | null> {
    await this.usersRepo.update(id, userData);
    return this.usersRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepo.delete(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepo.findOneBy({ email });
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findByEmail(email);
    if (user && (await compare(password, user.password))) {
      return user;
    }
    return null;
  }
}
