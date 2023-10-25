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
}
