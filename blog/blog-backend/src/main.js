import createFakeData from "./createFakeData";

require('dotenv').config()
import Koa from 'koa';
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'

import api from './api'
import jwtMiddleware from "./lib/jwtMiddleware";

const { PORT, MONGO_URI } = process.env;

console.log(MONGO_URI);

// mongoose.connect('mongodb://127.0.0.1:27017');
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  })



const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser())
app.use(jwtMiddleware)

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
})



//
// router.get('/', ctx => {
//   ctx.body = "홈";
// });
//
// router.get('/about/:name?', ctx => {
//   const { name } = ctx.params;
//   ctx.body = name ? `${name}의 소개` : '소개';
// });
//
// router.get('/posts', ctx => {
//   const { id } = ctx.query;
//   ctx.body = id ? `포스트#${id}` : "포스트 아이디가 없습니다.";
// })
//
// app.use(router.routes()).use(router.allowedMethods());
//
// app.listen(4000, () => {
//   console.log("Listening to port 4000");
// })

// const Koa = require('koa');
//
// const app = new Koa();
//
// app.use(async (ctx, next) => {
//   console.log(ctx.url);
//   console.log(1);
//   if (ctx.query.authorized !== '1') {
//     ctx.status = 401;
//     return;
//   }
//   await next()
//   console.log('END')
// })
//
// app.use((ctx, next) => {
//   console.log(2);
//   next();
// })
//
// app.use(ctx => {
//   ctx.body = 'hello word'
//   // console.log(ctx);
// })
//
// app.listen(4000, () => {
//   console.log("Listening to port 4000");
// })