import { Param, Body, Get, Put, Delete, Post, JsonController } from "routing-controllers";
import { UserRepository } from "./repository/UserRepository";
import { UserInfo } from "./model/UserInfo";

@JsonController()
export class UserController {

    private userRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    @Get("/users")
    getAll() {
        throw Error("Error happen in get users");
        // return "This action return all users";
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
        return `This action return user #${id}`;
    }

    @Post("/users")
    post(@Body() user: UserInfo) {
        this.userRepository.save(user);
        return `Saving user: ${user}`;
    }

    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: UserInfo) {
        return `Updating user: #${id} -- ${user}`
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        return `Removing user #${id}`;
    }

}