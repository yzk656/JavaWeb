const express=require('express');
const app=express();

/*静态资源处理*/
app.use('/abc',express.static('./views'));

app.get('/user',(req,res)=>{
    res.send({name:'yzk',age:20,gender:'男'});
});
app.post('/user',(req,res)=>{
    res.send('post请求成功');
});

app.get('/',(req,res)=>{
    /**
     * 通过req.query可以获取到客户端发送过来的查询参数
     * 注意：默认情况下，req.query是一个空对象
     * */
    console.log(req.query);
    res.send(req.query);
});

/*:id动态参数*/
app.get('/user/:id/:name',(req,res)=>{
    /*params是动态匹配到 URL 参数，默认是一个空对象*/
    console.log(req.params);
    res.send(req.params);
});

app.post('/register.html',(req,res)=>{
    res.send('post请求成功');
});

app.listen(8080,()=>{
    console.log("正在监听8080端口")
});
