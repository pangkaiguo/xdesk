import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export type User = any;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  /**
   * 通过id查询用户
   *
   * @param id 用户ID
   */
  async getUserById(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) throw new ForbiddenException('Access Denied');

    return user;
  }

  /**
   * 通过email查询用户
   *
   * @param email 登录邮箱
   */
  async getUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) throw new ForbiddenException('Access Denied');

    return user;
  }

  /**
   * 查询所有用户
   */
  async getUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
