/*导入 express*/
const express = require('express');
/*创建服务器的实例对象*/
const app = express();

/*导入 cors 中间件*/
const cors = require('cors');
/*用于捕获验证失败的错误*/
const joi = require('joi');
/*导入配置文件*/
const config = require('./config');
/*解析 token 的中间件*/
const express_jwt = require('express-jwt');


/*将 cors 注册为全局中间件*/
app.use(cors());
/*配置解析表单数据的中间件  注意：只能解析 application/x-www-form-urlencoded 这种格式的中间件*/
app.use(express.urlencoded({extended: false}));


/*一定要在路由之前，封装 res.cc 函数*/
app.use((req, res, next) => {
    /*status 默认值为 1 表示失败的情况 */
    /* err 的值，可能是一个错误对象，也可能是一个错误的描述字符串*/
    res.cc = function (err, status = 1) {
        res.send({
            status,
            msg: err instanceof Error ? err.message : err
        })
    }

    next();
})

/*使用 .unless({path:[/^\/api\//]}) 指定哪些接口不需要进行 Token 的身份认证*/
app.use(express_jwt({secret: config.jwtSecretKey}).unless({path: [/^\/api\//]}));

/*导入并注册 user 路由模块*/
const user_router = require('./router/user');
app.use('/api', user_router);

/*导入并使用 userinfo 模块*/
const userinfo_router=require('./router/userinfo');
app.use('/my',userinfo_router);

/*导入并注册 artcate 模块*/
const art_cate_router=require('./router/artcate');
app.use('/my/article',art_cate_router);

/*导入并使用文章路由模块*/
const article_router=require('./router/article');
/*为文章的路由挂载统一的访问前缀*/
app.use('/my/article',article_router);

/*错误中间件*/
app.use((err, req, res, next) => {
    /*数据验证失败*/
    if (err instanceof joi.ValidationError) {
        return res.cc(err);
    }
    /*身份认证失败错误*/
    if (err.name === 'UnauthorizedError')
        return res.cc('身份认证失败');
    res.cc(err);
});

/*启动服务器*/
app.listen(8080, () => {
    console.log('api server running at http://127.0.0.1:8080');
});