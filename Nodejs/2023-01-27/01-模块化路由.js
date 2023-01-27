const express=require('express');
const app=express();

/**
 * 1. 导入路由
 * 2， 注册路由模块
 * */
const router=require('./02-router');
/*注意： app.use() 函数的作用，就是来注册全局中间件*/
app.use('/api',router);

app.listen(8080,()=>{
    console.log('8080端口正在监听！！！');
});