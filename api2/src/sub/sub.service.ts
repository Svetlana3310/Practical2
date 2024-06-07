import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class SubService {
  
  constructor(private readonly httpService: HttpService) {}

    async check(id: number): Promise<boolean | User> {
      const response = await this.httpService.get('http://localhost:4000/users').toPromise();
      const users: User[] = response.data;
      const user = users.find(user => user.id === id && user.subscription === true);
      
      if (!user) {
        return false;
      }
      return true
    } catch (error) {
      throw new HttpException('Error fetching users', HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
