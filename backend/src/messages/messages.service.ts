import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { User } from '../entities/user.entity';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    // Find or create user
    let user = await this.userRepository.findOne({
      where: { username: createMessageDto.username },
    });

    if (!user) {
      user = this.userRepository.create({ username: createMessageDto.username });
      user = await this.userRepository.save(user);
    }

    const message = this.messageRepository.create({
      content: createMessageDto.content,
      roomId: createMessageDto.roomId,
      userId: user.id,
    });

    return await this.messageRepository.save(message);
  }

  async findByRoom(roomId: number): Promise<any[]> {
    const messages = await this.messageRepository.find({
      where: { roomId },
      relations: ['user'],
      order: { createdAt: 'ASC' },
    });

    // Map messages to include username
    return messages.map(message => ({
      id: message.id,
      content: message.content,
      roomId: message.roomId,
      userId: message.userId,
      username: message.user.username,
      createdAt: message.createdAt,
    }));
  }

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find({
      relations: ['user', 'room'],
      order: { createdAt: 'DESC' },
    });
  }
}
