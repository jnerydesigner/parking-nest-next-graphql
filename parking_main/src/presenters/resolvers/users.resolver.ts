import { UpdateUserInput } from './../../application/dto/update-user.input';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from '../../domain/entities/user.entity';
import { CreateUserInput } from '@dtos/create-user.input';
import { UsersService } from '@services/user.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  @Query(() => [User], { name: 'findAll' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'findOne' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.updateUser(
      { email: updateUserInput.email, name: updateUserInput.name },
      updateUserInput.id,
    );
  }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }
}
