const express = require('express');
const app = express();

/*注意：除了 错误级别中间件，其他的中间件，必须在路由之前进行配置*/
/*解析json格式的中间件*/
app.use(express.json());
/*解析表单这 url-encoded 格式的数据*/
app.use(express.urlencoded({extended:false}));

app.post('/user', (req, res) => {
    /*在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据*/
    /*默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认为 undefined*/
    console.log(req.body);
    res.send('ok');//{ name: 'yzk', age: 20 }
});

app.post('/book',(req,res)=>{
    /*在服务端，可以通过 req.body 获取json格式的表单数据和 url-encoded 格式的数据*/
    console.log(req.body);
   res.send('ok');
});

app.listen(8080, () => {
    console.log('正在监听听8080端口！！！');
});

