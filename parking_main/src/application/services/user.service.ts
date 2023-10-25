import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infra/repository/interfaces/user-repository.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: UserRepository,
  ) {}

  async findAll() {
    console.log('chegou aqui');
    return this.userRepository.findAll();
  }

  async createUser(body: { email: string; name: string }) {
    return this.userRepository.create(body);
  }
}
