/**
 * 这里定义文章模块，供 ./router/article 使用
 */



/*发布新文章处理函数*/
exports.add_article=(req,res)=>{
    console.log(req.body);    /*文本类型的数据*/
    console.log('---------------分割线----------------');
    console.log(req.file);    /*文本类型的数据*/

    /*手动判断是否上传了文章封面*/
    if(!req.file||req.file.fieldname!=='cover_img')
        return res.cc('文章封面是必选参数');

    /*TODO：5.25还没实现【网址：http://escook.cn:8088/#/mds/5.article?id=_524-%e9%aa%8c%e8%af%81%e8%a1%a8%e5%8d%95%e6%95%b0%e6%8d%ae】*/
};
