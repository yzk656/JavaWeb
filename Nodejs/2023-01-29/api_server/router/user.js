const express = require('express');
const {reg_user} = require("../router_handler/user");
/*创建路由对象*/
const router = express.Router();

/*导入 user 路由处理函数*/
const user_handler = require('../router_handler/user');
/*导入验证表单数据的中间件*/
const express_joi = require('@escook/express-joi');
/*导入需要的验证规则对象*/
const {reg_login_schema} = require('../schema/user')


/*注册新用户*/
router.post('/reguser', express_joi(reg_login_schema), user_handler.reg_user);

/*登录*/
router.post('/login', express_joi(reg_login_schema),user_handler.login);


/*将路由对象共享出去*/
module.exports = router;