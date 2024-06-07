import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {

  public users: User[] = [
    {id: 1, name: 'Ivan', email: 'Ivan@gmail.com', subscription: true}, 
    {id: 2, name: 'Oleksandr', email: 'Oleksandr@gmail.com', subscription: false},
];

  getAllUsers() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
        throw new NotFoundException(`user with id: ${id} not found`);
    }
    return user;    
  }
}
