import { UsersController } from '@controllers/users.controller';
import { Module } from '@nestjs/common';
import { UsersService } from '@services/user.service';
import { DatabaseModule } from './database.module';
import { UserPrismaRepository } from '../repository/user-prisma.repository';
import { UsersResolver } from '@resolvers/users.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'USER_REPOSITORY',
      useClass: UserPrismaRepository,
    },
    UsersResolver,
  ],
})
export class UsersModule {}
