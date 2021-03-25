import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/inputs/create-user.input';
import { User } from './entities/user.entity';
import {v4 as uuid} from 'uuid'
import { GetUsersArgs } from './dto/args/get-users.args';
import { GetUserArgs } from './dto/args/get-user.args';
import { DeleteUserInput } from './dto/inputs/delete-user.input';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    public async getAllUsers(): Promise<User[]>{
        return await this.userRepository.find({
            order: {
                username: "ASC",
            }
        })
        
    }
    public async getUserById({id}: GetUserArgs):Promise<User> {
        return await this.userRepository.findOne({id});
    }

    public async getUsers({ids}: GetUsersArgs): Promise<User[]>{
        return await this.userRepository.findByIds(ids)
    }

    public async createUser(createUserInput: CreateUserInput): Promise<User> {

        const date = new Date().toISOString();
        
        const user = this.userRepository.create({
            id: uuid(),
            created_at: date,
            last_active_on: date,
            ...createUserInput,
        })

        return this.userRepository.save(user);
    }


    public async deleteUser(deleteUserInput: DeleteUserInput): Promise<DeleteUserInput> {
        const result = await this.userRepository.delete(deleteUserInput.id);

        if (result.affected === 0) {
          throw new NotFoundException(
            `Snippet with ID: ${deleteUserInput.id} Not Found!`,
          );
        }
    
        return deleteUserInput;
    }
}
