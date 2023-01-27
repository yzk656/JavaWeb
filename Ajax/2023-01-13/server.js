//引入express
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则

app.get('/home', (request, response) => {
    //响应一个页面[_ _dirname:代表绝对路径，同时 / 也不能省略]
    response.sendFile(__dirname + '/03-index.html');
});


app.get('/data',(request,response)=>{
   response.send('用户数据');
});


//监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口正在监听！！！');
});