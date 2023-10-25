import { AppController } from '@controllers/app.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from '@services/app.service';
import { UsersModule } from './users.module';
import { DatabaseModule } from './database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './src/infra/database/schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
