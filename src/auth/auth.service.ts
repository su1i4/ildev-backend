import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(userDto: any): Promise<UserEntity> {
    return this.userService.create(userDto);
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string; user: UserEntity }> {
    const user = await this.userService.validateUser(email, password);
    if (!user) throw new Error('Invalid credentials');

    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '1d',
      }),
      user: user,
    };
  }
}
