import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from '../messages/messages.service';
import { CreateMessageDto } from '../messages/dto/create-message.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messagesService: MessagesService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { roomId: number; username: string },
  ) {
    client.join(`room-${data.roomId}`);
    this.server.to(`room-${data.roomId}`).emit('userJoined', {
      username: data.username,
      roomId: data.roomId,
    });
    console.log(`User ${data.username} joined room ${data.roomId}`);
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { roomId: number; username: string },
  ) {
    client.leave(`room-${data.roomId}`);
    this.server.to(`room-${data.roomId}`).emit('userLeft', {
      username: data.username,
      roomId: data.roomId,
    });
    console.log(`User ${data.username} left room ${data.roomId}`);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() createMessageDto: CreateMessageDto,
  ) {
    try {
      const message = await this.messagesService.create(createMessageDto);
      
      // Emit to all clients in the room
      this.server.to(`room-${createMessageDto.roomId}`).emit('newMessage', {
        id: message.id,
        content: message.content,
        username: createMessageDto.username,
        roomId: message.roomId,
        userId: message.userId,
        createdAt: message.createdAt,
      });

      return { success: true, message };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('typing')
  handleTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { roomId: number; username: string; isTyping: boolean },
  ) {
    client.to(`room-${data.roomId}`).emit('userTyping', {
      username: data.username,
      isTyping: data.isTyping,
    });
  }
}
