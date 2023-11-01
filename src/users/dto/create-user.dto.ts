import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'example@gmail.com', description: 'Email' })
  readonly email: string;
  @ApiProperty({ example: '1235678', description: 'Password' })
  readonly password: string;
}
