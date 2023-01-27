const express = require('express');
const app=express();

/*定义中间件函数*/
const mw=function (req,res,next){
    console.log('这是一个中间件函数！！！');
    /*把流转关系，转交给下一个中间件或者路由*/
    next();
}

/*将 mw 注册为全局生效的中间件*/
app.use(mw);

/*这是全局中间件的简化形式*/
app.use((req,res,next)=>{
    /*获取到请求到达服务器的时间*/
    const time=Date.now();
    /*为 req 对象，挂载自定义属性，从而把时间共享给后面的所以路由*/
    req.startTime=time;
    console.log('中间件函数！！！');
    next();
});
app.get('/',(req,res)=>{
   res.send('this is home page'+req.startTime);
});

app.get('/user',(req,res)=>{
    res.send('this is user page'+req.startTime);
});

app.listen(8080,()=>{
    console.log('正在监听8080端口！！！');
});