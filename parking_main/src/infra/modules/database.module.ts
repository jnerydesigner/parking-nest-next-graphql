import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../database/client/prisma-service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
