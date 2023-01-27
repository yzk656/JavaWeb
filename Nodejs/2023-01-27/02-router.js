/*这是路由模块*/
const express=require('express');
/*创建路由对象*/
const router=express.Router();

/*挂在具体的路由*/
router.get('/user/list',function(req,res){
    res.send('Get user list.');
})

router.post('/user/add',function (req,res){
   res.send('add new user');
});


/*向外导出路由对象*/
module.exports=router;