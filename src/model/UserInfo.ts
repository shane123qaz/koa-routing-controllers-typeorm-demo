import { IsEmail } from "class-validator";

export class UserInfo {
    id: number;
    name: string;
    age: number;
    @IsEmail()
    email: string;
}