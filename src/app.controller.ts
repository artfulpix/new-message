import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('salama')
  getMessage() {
    return 'Salama Tompoko!';
  }

  @Get('veloma')
  byeMessage() {
    return { statusCode: 200, message: 'Veloma Tompoko, rampitso indray!' };
  }
}
