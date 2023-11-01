export interface UserRepository {
  findAll(): Promise<any>;
  create(input: { email: string; name: string }): Promise<any>;
  update(input: Input, userId: string): Promise<any>;
  findOne(userId: string): Promise<any>;
}

type Input = {
  email?: string;
  name?: string;
};
