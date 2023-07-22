import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository {
  async findOne(id: string) {
    const rawMessages = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(rawMessages);
    return messages[id];
  }

  async findAll() {
    const rawMessages = await readFile('messages.json', 'utf8');
    return JSON.parse(rawMessages);
  }

  async create(content: string) {
    const rawMessages = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(rawMessages);
    const newId = Math.ceil(Math.random() * 999);

    const message = { id: newId, content };
    messages[newId] = message;
    await writeFile('messages.json', JSON.stringify(messages), 'utf8');
  }
}
