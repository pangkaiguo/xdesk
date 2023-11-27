import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

export interface Result {
  code: number;
  message: string;
  data?: any;
}

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  @Get(':id')
  async getUserById(@Param() id: number): Promise<Result> {
    const data = await this.userService.getUserById(id);
    return { code: 200, message: '通过id查询用户成功', data };
  }

  @Get(':email')
  async getUserByEmail(@Param() email: string): Promise<Result> {
    const data = await this.userService.getUserByEmail(email);
    return { code: 200, message: '通过email查询用户成功', data };
  }

  @Get()
  async getUsers(): Promise<Result> {
    const data = await this.userService.getUsers();
    return { code: 200, message: '批量查询用户成功', data };
  }
}
