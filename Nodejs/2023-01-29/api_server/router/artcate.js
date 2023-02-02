/*导入 express */
const express = require('express');
/*创建路由对象*/
const router = express.Router();

/*导入文章分类的路由处理函数模块*/
const artcate_handler = require('../router_handler/artcate');
/*导入验证数据的中间件*/
const express_joi = require('@escook/express-joi');
/*导入文章分类的验证模块*/
const {add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema} = require('../schema/artcate');


/*获取文章分类的列表数据*/
router.get('/cates', artcate_handler.get_article_cates);

/*新增文章分类路由*/
router.post('/addcates', express_joi(add_cate_schema), artcate_handler.add_article_cates);

/*删除文章分类路由*/
router.get('/deletecate/:id', express_joi(delete_cate_schema), artcate_handler.delete_cate_id);

/*获取文章路由*/
router.get('/cates/:id', express_joi(get_cate_schema), artcate_handler.get_artcate_id);

/*更新文章分类路由*/
router.post('/updatecate', express_joi(update_cate_schema), artcate_handler.update_cate_id);

/*向外共享路由对象*/
module.exports = router;