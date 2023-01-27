const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    /**
     * 1. 人为制造错误
     * */
    throw new Error('服务器内部发生错误');
    res.send('home page');
});

/*定义错误级别中间件，捕获整个项目的异常错误，从而防止程序崩溃*/
app.use((error,req,res,next)=>{
    console.log('发生了错误'+error.message);
    res.send('Error：'+error.message);
});


app.listen(8080,()=>{
    console.log('正在监听8080端口');
})