import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({ description: 'The content of the message' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'The room ID' })
  @IsNumber()
  roomId: number;

  @ApiProperty({ description: 'The user ID' })
  @IsNumber()
  userId: number;

  @ApiProperty({ description: 'The username' })
  @IsString()
  @IsNotEmpty()
  username: string;
}
