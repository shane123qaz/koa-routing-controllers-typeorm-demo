import { User } from "../entity/User";
import { UserInfo } from '../model/UserInfo';
import { getConnection } from 'typeorm';

export class UserRepository {
    
    async save(userInfo: UserInfo) {
        const user = new User();
        user.firstName = userInfo.name;
        user.lastName = "Zhang";
        user.age = userInfo.age;

        await getConnection().manager.save(user);
        console.log("Saved a new user with id: " + user.id);

        console.log("Loading users from the database...");
        const users = await getConnection().manager.find(User);
        console.log("Loaded users: ", users);
    }

}