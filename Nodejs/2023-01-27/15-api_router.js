const express = require('express');
const router = express.Router();

/*这里挂载对应的路由*/
router.get('/get', (req, res) => {
    /*通过 req.query 获取客户端通过查询字符串，发送到服务器的数据*/
    const query = req.query;
    res.send({
        status: 0,    //0:表示处理成功，1表示处理失败
        msg: 'GET 请求成功！',
        data: query
    });
});

router.post('/post', (req, res) => {
    /*通过 req.body 获取请求体中包含的 url-encoded 格式数据*/
    const body = req.body;
    res.send({
        status: 0,    //0:表示处理成功，1表示处理失败
        msg: 'POST 请求成功！',
        data: body
    });
})

/*定义 delete 接口*/
router.delete('/delete',(req,res)=>{
    res.send({
        status: 0,    //0:表示处理成功，1表示处理失败
        msg: 'DELETE 请求成功！'
    });
});

module.exports = router;