import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './messages.schema';
import { Model } from 'mongoose';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async create(content: string) {
    return await this.messageModel.create({ content });
  }

  async findAll() {
    return await this.messageModel.find();
  }

  async findOne(id: string) {
    return await this.messageModel.findById(id);
  }

  async update(id: string, content: string) {
    return await this.messageModel.findByIdAndUpdate(
      id,
      { content },
      {
        new: true,
      },
    );
  }

  async delete(id: string) {
    return await this.messageModel.findByIdAndDelete(id);
  }
}
