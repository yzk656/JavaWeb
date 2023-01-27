/*这是路由模块*/
const express=require('express');
/*创建路由对象*/
const router=express.Router();

router.get('/user/list',function(req,res){
    res.send('Get user list.');
})


/*向外导出路由对象*/
module.exports=router;