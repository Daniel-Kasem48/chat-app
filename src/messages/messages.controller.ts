import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post()
  async create(@Body('content') content: string) {
    console.log({
      content,
    });
    return await this.messagesService.create(content);
  }

  @Get()
  async findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body('content') content: string) {
    return this.messagesService.update(id, content);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.messagesService.delete(id);
  }
}
