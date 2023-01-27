const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
/*静态资源处理*/
app.use(express.static('./views'));
/*引入功能模块
    用来获取post参数
* */
const body_parser=require('body-parser');
/*将body-parser功能添加到项目app中*/
app.use(body_parser.urlencoded({extend:false}));/*接收的值为字符串，true为任意类型，和传过来的参数类型保持一致*/
app.use(body_parser.json());/*解析json格式*/
/*在接口中获取参数*/
app.post('/register.html',(req,res)=>{
    let body=req.body();
    console.log(body);
    res.send('post提交成功');
});

app.get('/register.html', (request, response) => {
    /*获取文件路径*/
    let file_path = path.join(__dirname, 'views', 'register.html');
    /*获取文件信息*/
    let content = fs.readFileSync(file_path);
    response.send(content);
});

app.listen(3000, (error) => {
    if (error) {
        console.log('出错了！！！');
    } else {
        console.log('3000端口正在监听！！！');
    }
});