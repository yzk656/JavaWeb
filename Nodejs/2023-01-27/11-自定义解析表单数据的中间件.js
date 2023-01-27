const express = require('express');
const app = express();
/*导入 Node.js 内置的 querystring 模块*/
const qs=require('querystring');

/*这是解析表单数据的中间件*/
app.use((req, res, next) => {
    /*定义中间件具体的业务逻辑*/
    /*定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据*/
    let str='';
    /*监听 req 的 data 事件*/
    req.on('data',(chunk)=>{
        str+=chunk;
    });
    /*监听 req 的 end 事件*/
    req.on('end',()=>{
        // console.log(str);
        /*TODO: 把字符串格式的请求体数据，解析成对象格式*/
        const body=qs.parse(str);
        req.body=body;
        next();
    });
});

app.post('/user',(req,res)=>{
    res.send(req.body);
});

app.listen(8080, () => {
    console.log('正在监听听8080端口！！！');
})