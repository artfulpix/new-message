import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMessage } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return { message: ' Hello', data: ['1', '2'] };
  }

  @Post('')
  createMessage(@Body() body: CreateMessage) {
    return { data: body };
  }

  @Get('/:id')
  getMessage(@Param() param: { id: number }, @Query() query: any) {
    return { message: 'success', param, query };
  }
}
