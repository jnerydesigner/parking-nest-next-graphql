import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '@services/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() body: { email: string; name: string }) {
    return this.usersService.createUser(body);
  }
}
