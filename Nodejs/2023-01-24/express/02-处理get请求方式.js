const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
app.get('/index.html', (request, response) => {
    /*获取文件路径*/
    let file_path = path.join(__dirname, 'views', 'index.html');
    /*获取文件信息*/
    let content = fs.readFileSync(file_path);
    response.send(content);
    /*获取请求参数*/
    let query=request.query;
    console.log(query);
    console.log(query.age,query.name1);
});
app.get('/', (request, response) => {
    response.send('hello express框架1');
});

app.listen(8082, (error) => {
    if (error) {
        console.log('出错了！！！');
    } else {
        console.log('8082端口正在监听！！！');
    }
});