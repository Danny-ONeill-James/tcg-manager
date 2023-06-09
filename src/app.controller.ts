import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('Testing Env: ', process.env.MYSQL_USERNAME);
    return this.appService.getHello();
  }
}
