import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsString,
  IsEnum,
  IsDate,
  IsInt,
} from 'class-validator';
import { Role } from 'src/common/enums/role.enum';

export class UserDto {
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @MinLength(10)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsEnum(Role)
  role: Role;

  @IsDate()
  created_at: Date;
}
