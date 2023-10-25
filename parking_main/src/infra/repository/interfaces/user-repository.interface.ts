export interface UserRepository {
  findAll(): Promise<any>;
  create(input: { email: string; name: string }): Promise<any>;
}
