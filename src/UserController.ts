import { Controller, Param, Body, Get, Put, Delete, Post } from "routing-controllers";
import { IsEmail } from "class-validator";
import { UserRepository } from "./repository/UserRepository";

class User {
    id: number;
    name: string;
    age: number;
    @IsEmail()
    email: string;
}

@Controller()
export class UserController {
    
    @Get("/users")
    getAll() {
        return "This action return all users";
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
        return `This action return user #${id}`;
    }

    @Post("/users")
    post(@Body() user: User) {
        new UserRepository().save();
        return `Saving user: ${user}`;
    }

    @Put("users/:id")
    put(@Param("id") id: number, @Body() user: User) {
        return `Updating user: #${id} -- ${user}`
    }

    @Delete("users/:id")
    remove(@Param("id") id: number) {
        return `Removing user #${id}`;
    }

}