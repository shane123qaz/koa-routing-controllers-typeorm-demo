import * as Koa from "koa";

const app = new Koa();

app.use(async ctx => {
    ctx.body = "Hello World";
});

app.on("error", console.error);


const post: number = Number(process.env.PORT) || 3000;
app.listen(post);