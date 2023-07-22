import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessageService) {}

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto, @Query() query: any) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param() param: { id: string }) {
    const message = await this.messageService.findOne(param.id);

    if (!message) throw new NotFoundException('Message Not Found');

    return message;
  }
}
