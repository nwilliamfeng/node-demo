const Koa = require('koa');
const Router=require('koa-router');
const Test= require('./mongodb/mongodbTst');
 

const app=new Koa();
// app.use(async ctx => {
  
//   ctx.body = {
//     url:ctx.url,
//     querystring:ctx.request.querystring,
    
//   }

// });

const about =ctx=>ctx.body='this is about';

// app.use(async ctx=>{
//   ctx.body='abcd';
// })

const router=new Router();
router.get('/',(ctx,next)=>{
  Test.sayHello('asdf');
  ctx.body='this is main';
});
router.get('/about',(ctx,next)=>{
  ctx.body='this is about';
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);

 