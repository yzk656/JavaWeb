const express=require('express');
const app=express();

/*定义中间件函数*/
const mw1=(req,res,next)=>{
    console.log('调用了局部中间件函数1');
    next();
};
const mw2=(req,res,next)=>{
    console.log('调用了局部中间件函数2');
    next();
};

/*创建路由*/
app.get('/',mw1,(req,res)=>{
    res.send('home page');
});

app.get('/user',[mw1,mw2],(req,res)=>{
    res.send('user page');
});

app.listen(8080,()=>{
    console.log('正在监听8080端口！！！');
});