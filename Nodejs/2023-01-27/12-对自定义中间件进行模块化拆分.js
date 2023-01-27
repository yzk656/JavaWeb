const express = require('express');
const app = express();

/*导入自己封装的中间件模块*/
const custom_body_parser=require('./13-custom-body-parser');
/*将自定义的中间件函数，注册为全局可用的中间件*/
app.use(custom_body_parser);

app.post('/user',(req,res)=>{
    res.send(req.body);
});

app.listen(8080, () => {
    console.log('正在监听听8080端口！！！');
})