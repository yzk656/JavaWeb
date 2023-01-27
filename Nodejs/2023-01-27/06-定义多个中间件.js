const express=require('express');
const app=express();


/*定义第一个全局中间件*/
app.use((req,res,next)=>{
    console.log("调用了第一个全局中间件");
    next();
})
/*定义第二个全局中间件*/
app.use((req,res,next)=>{
    console.log("调用了第一个全局中间件");
    next();
})

app.get('/user',(req,res)=>{
    res.send('user page');
});
app.listen(8080,()=>{
    console.log('正在监听8080端口！！！');
});