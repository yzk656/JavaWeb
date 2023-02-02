/*导入 express*/
const express = require('express');
/*创建路由对象*/
const router = express.Router();


/*导入文章的路由处理函数模块*/
const article_handler = require('../router_handler/article');
/*导入解析 formdata 格式表数据的包*/
const multer = require('multer');
/*导入处理路径的核心模块*/
const path = require('path');
/*导入验证数据的中间件*/
const express_joi = require('@escook/express-joi');
/*导入文章的验证模块*/
const {add_article_schema} = require('../schema/article');


/*创建 multer 的实例对象,通过 dest 属性指定文件的存放路径*/
const upload = multer({dest: path.join(__dirname, '../uploads')});


/*发布新文章*/
router.post('/add', article_handler.add_article);

// 发布新文章的路由
// upload.single() 是一个局部生效的中间件，用来解析 FormData 格式的表单数据
// 将文件类型的数据，解析并挂载到 req.file 属性中
// 将文本类型的数据，解析并挂载到 req.body 属性中
/*multipart/form-data ：指定传输数据为二进制类型，比如图片、mp3、文件。*/
router.post('/add', upload.single('cover_img'), express_joi(add_article_schema), article_handler.add_article);


/*向外共享路由对象*/
module.exports = router;