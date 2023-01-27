const express = require('express');
const app = express();

/*配置解析表单数据的中间件*/
app.use(express.urlencoded({extended: false}));

/*必须在配置 cors 中间件之前，配置 JSONP 的接口*/
app.get('/api/jsonp', (req, res) => {
    /*TODO:定义JSONP接口具体的实现过程*/
    /*1. 得到函数名称*/
    const func_name = req.query.callback;
    console.log(func_name);
    /*2. 定义发送到客户端的数据对象*/
    const data = {
        name: '杨振坤',
        age: 20
    };
    /*3. 拼接出一个函数的调用*/
    const script_str = `${func_name}(${JSON.stringify(data)})`;
    /*4. 把拼接的字符串，响应给客户端*/
    res.send(script_str);
})

/*一定要在路由之前，配置 cors 这个中间件，从而解决跨域问题*/
const cors = require('cors');
app.use(cors());

/*导入路由模块*/
const router = require('./15-api_router');
/*把路由模块注册到 app 上*/
app.use('/api', router);

app.listen(8080, () => {
    console.log('正在监听8080端口！！！');
});