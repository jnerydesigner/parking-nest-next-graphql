import { Injectable } from '@nestjs/common';
import { UserRepository } from './interfaces/user-repository.interface';
import { PrismaService } from '../database/client/prisma-service';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: { email: string; name: string }): Promise<any> {
    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        name: input.name,
      },
    });

    return user;
  }
  async findAll(): Promise<any> {
    return this.prisma.user.findMany();
  }

  async update(
    input: { email?: string; name?: string },
    userId: string,
  ): Promise<any> {
    return this.prisma.user.update({
      data: input,
      where: {
        id: userId,
      },
    });
  }

  async findOne(userId: string): Promise<any> {
    return this.prisma.user.findFirst({ where: { id: userId } });
  }
}
