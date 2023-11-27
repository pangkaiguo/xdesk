import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, Welcome to XDesk server api management! http://localhost:3333/api for more details.';
  }
}
