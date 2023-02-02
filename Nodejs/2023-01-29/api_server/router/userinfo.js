/*导入express*/
const express = require('express');
/*创建路由对象*/
const router = express.Router();

/*导入用户信息处理函数模块*/
const userinfo_handler = require('../router_handler/userinfo');
/*导入验证数据合法性的中间件*/
const express_joi = require('@escook/express-joi');
/*导入需要验证规则的对象*/
const {update_userinfo_schema, update_password_schema, update_avatar_schema} = require('../schema/user');


/*获取用户信息*/
router.get('/userinfo', userinfo_handler.get_userinfo);

/*更新用户基本信息*/
router.post('/userinfo', express_joi(update_userinfo_schema), userinfo_handler.update_userinfo);

/*重置密码路由*/
router.post('/updatepwd', express_joi(update_password_schema), userinfo_handler.update_password);

/*更新用户头像的路由*/
router.post('/update/avatar', express_joi(update_avatar_schema), userinfo_handler.update_avatar);

/*向外共享路由对象*/
module.exports = router;