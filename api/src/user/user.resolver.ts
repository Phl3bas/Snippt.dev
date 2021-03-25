
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/inputs/create-user.input';
import { DeleteUserInput } from './dto/inputs/delete-user.input';
import { User } from './entities/user.entity';
import { DeleteUserType } from './graphql/deleteUser.type';
import { UserType } from './graphql/user.type';
import { UserService } from './user.service';

@Resolver((of)=>UserType)
export class UserResolver {

    constructor(private readonly userService: UserService){}


    @Query((returns)=>[UserType], {name: "allUsers", nullable: 'items'})
    public async getAllUsers(): Promise<User[]>{
        return await this.userService.getAllUsers();
    }

    @Query((returns)=> [UserType], {name: "users", nullable: 'items'})
    public async getUsers(@Args() getUsersArgs: GetUsersArgs ): Promise<User[]>{
        return await this.userService.getUsers(getUsersArgs);
    }

    @Query((returns)=> UserType)
    public async getUserById(@Args() getUserArgs: GetUserArgs ): Promise<User> {
        return await this.userService.getUserById(getUserArgs);
    }

    @Mutation((returns)=> UserType)
    public async createUser(@Args('createUserData', {type : ()=> CreateUserInput}) createUserInput: CreateUserInput): Promise<User>{
        return await this.userService.createUser(createUserInput)
    }

    @Mutation((returns)=> DeleteUserType)
    public async deleteUser(@Args('deleteUserData' ,{type : ()=> DeleteUserInput}) deleteUserInput: DeleteUserInput): Promise<DeleteUserInput> {
        return await this.userService.deleteUser(deleteUserInput)
    }


}
