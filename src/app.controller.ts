import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './interfaces/user.interfaces';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): User[] {
    return this.appService.getUser();
  }

  @Get('/:id')
  getUserDetail(@Param('id') id: number): User[] {
    return this.appService.getUserDetail(id);
  }

  @Post()
  createUser(@Body() user: User): User {
    return this.appService.createUser(user);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: number, @Body() updateUser: User): User | string {
    return this.appService.updateUser(id, updateUser);
  }

  @Delete('/:id')
  deleteMenu(@Param('id') id: number): User | string {
    return this.appService.deleteUser(id);
  }
}
