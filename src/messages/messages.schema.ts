import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop({
    required: [true, 'Content is required.'],
    type: String,
    // trim:true
  })
  content: string;
}
Message.name;
export const MessageSchema = SchemaFactory.createForClass(Message);
