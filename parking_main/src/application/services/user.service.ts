import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infra/repository/interfaces/user-repository.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: UserRepository,
  ) {}

  async findAll() {
    return this.userRepository.findAll();
  }

  async createUser(body: { email: string; name: string }) {
    return this.userRepository.create(body);
  }

  async updateUser(body: { email?: string; name?: string }, userId: string) {
    const updateUser = await this.userRepository.update(body, userId);

    return updateUser;
  }

  async findOne(userId: string) {
    return this.userRepository.findOne(userId);
  }
}
