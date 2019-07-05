import { createConnection } from "typeorm";
import { User } from "../entity/User";

export class UserRepository {
    
    save() {
        return createConnection().then(async connection => {
                const user = new User();
                user.firstName = "Shane";
                user.lastName = "Zhang";
                user.age = 29;

                await connection.manager.save(user);
                console.log("Saved a new user with id: " + user.id);

                console.log("Loading users from the database...");
                const users = await connection.manager.find(User);
                console.log("Loaded users: ", users);
            
            }).catch(console.log);
    }

}