import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
