import "reflect-metadata";
import { createKoaServer, useKoaServer } from "routing-controllers";
import { UserController } from './UserController';
import * as Koa from "koa";
import { createConnection } from "typeorm";

createConnection().catch(console.error);

const app = new Koa();

// const app = createKoaServer({
//     controllers: [UserController]
// })

useKoaServer(app, {
    validation: true,
    routePrefix: "/api",
    controllers: [UserController]
});

const post: number = Number(process.env.PORT) || 3000;
app.listen(post);