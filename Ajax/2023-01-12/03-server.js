//1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

//3. 创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello Ajax-2');
});

//针对 IE缓存
app.get('/ie', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello IE-1');
});

//延时响应
app.get('/delay', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // //定时器
    setTimeout(function () {
        //设置响应体
        response.send('延时响应');
    }, 3000);
});


//all 可以接收任意类型的请求
// app.post('/server',(request,response)=>{
app.all('/server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置特殊响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    response.send('hello Ajax Post');
});

app.all('/json-server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置特殊响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    //响应一个数据
    const data = {
        name: 'yangzhenkun'
    };

    //对对象进行字符串转换
    let str = JSON.stringify(data);

    //设置响应体
    response.send(data);
});

//Jquery 服务
app.all('/jquery_server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置特殊响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    // response.send('Hello Jquery Ajax');
    const data = {
        name: 'yangzhenkun'
    };

    //对对象进行字符串转换
    let str = JSON.stringify(data);

    //设置响应体
    response.send(data);
});


//axios 服务
app.all('/axios_server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置特殊响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    // response.send('Hello Jquery Ajax');
    const data = {
        name: 'yangzhenkun'
    };

    //对对象进行字符串转换
    let str = JSON.stringify(data);

    //设置响应体
    response.send(data);
});


//fetch 服务
app.all('/fetch_server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置特殊响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    // response.send('Hello Jquery Ajax');
    const data = {
        name: 'yangzhenkun'
    };

    //对对象进行字符串转换
    let str = JSON.stringify(data);

    //设置响应体
    response.send(data);
});

//jsonp 服务
app.all('/jsonp-server',(request,response)=>{
    // response.send("console.log('hello jsonp-server' )");
    const data={
        name:'yangzhenkun2',
    };
    //将数据转换成字符窜
    let str=JSON.stringify(data);
    //返回结果
    response.send(`handle(${str})`);
});

//用户名检测是否存在
app.all('/check-username',(request,response)=>{
    // response.send("console.log('hello jsonp-server' )");
    const data={
        exist:1,
        msg:'用户已经存在'
    };
    //将数据转换成字符窜
    let str=JSON.stringify(data);
    //返回结果
    response.send(`handle(${str})`);
});


//jquery-jsonp
app.all('/jquery-jsonp-server',(request,response)=>{
    // response.send("console.log('hello jsonp-server' )");
    const data={
        name:'yangzhenkun',
        city:['北京','上海','深圳']
    };
    //将数据转换成字符窜
    let str=JSON.stringify(data);

    //接收callback参数
    let cb=request.query.callback;

    //返回结果[注意如果想在拼接变量字符串，需要把后面的变量放在括号里面]
    response.send(`${cb}(${str})`);
});

//cors-server
app.all('/cors-server',(request,response)=>{
    //需要设置响应头
    response.setHeader("Access-Control-Allow-Origin","*");
    // response.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500");

    //一般也会把请求头信息添加上 [这样头信息也可以自定义了]
    response.setHeader("Access-Control-Allow-Headers","*");

    response.send('cors-server');
});



//4. 监听端口启动服务
app.listen(3000, () => {
    console.log("服务已经启动，3000端口监听中。。。")
});