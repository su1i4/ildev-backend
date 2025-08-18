import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class StackDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  image: string;
}
