/**
 * 这里定义文章模块，供 ./router/artcate 使用
 */

/*导入数据库操作模块*/
const db = require('../db/index');


/*获取文章分类列表数据的处理函数*/
exports.get_article_cates = (req, res) => {
    /*根据分类的状态，获取所有未被删除的分类列表数据*/
    const sql = `select * from ev_article_cate where is_delete=0 order by id asc`;
    db.query(sql, (err, results) => {
        /*执行 SQL 语句失败*/
        if (err)
            return res.cc(err);
        /*执行 SQL 语句成功*/
        res.send({
            status: 0,
            msg: '获取文章分类成功！',
            data: results
        });
    });
};

/*新增文章分类的处理函数*/
exports.add_article_cates = (req, res) => {
    /*查询 分类名称 和 分类别名 是否被占用*/
    const search_sql = `select * from ev_article_cate where name=? or alias=?`;
    db.query(search_sql, [req.body.name, req.body.alias], (err, results) => {
        /*执行 SQL 语句失败*/
        if (err)
            return res.cc(err);
        /*分类名称 和 分类别名 都被占用*/
        if (results.length === 2)
            return res.cc('分类名称和别名都被占用,请更换后重试');
        if (results === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias)
            return res.cc('分类名称和别名都被占用,请更换后重试');
        /*分类名称 或者 别名 被占用*/
        if (results.length === 1 && results[0].name === req.body.name)
            return res.cc('分类名被占用，请更换后重试');
        if (results.length === 1 && results[0].alias === req.body.alias)
            return res.cc('分类别名被占用，请更换后重试');

        /*TODO:新增文章分类*/
        const add_article_sql = `insert into ev_article_cate set ?`;
        db.query(add_article_sql, req.body, (err, results) => {
            /*SQL 语句执行失败*/
            if (err)
                return res.cc(err);
            /*SQL语句执行成功，但是影响行数不等于 1 */
            if (results.affectedRows !== 1)
                return res.cc('新增文章分类失败');
            /*新增文章分类成功*/
            res.cc('新增文章分类成功', 0);
        });
    });
};

/*删除文章分类的处理函数*/
exports.delete_cate_id = (req, res) => {
    /*定义删除文章分类的 SQL 语句*/
    const delete_cate_sql = `update ev_article_cate set is_delete=1 where id=?`;
    db.query(delete_cate_sql, req.params.id, (err, results) => {
        /*执行 SQL 语句失败*/
        if (err)
            return res.cc(err);
        /*执行 SQL 语句成功，但是影响行数不等于 1 */
        if (results.affectedRows !== 1)
            return res.cc('删除文章分类失败');

        /*删除文章分类成功*/
        res.cc('删除文章分类成功', 0);
    });
};

/*根据 ID 获取文章分类的处理函数*/
exports.get_artcate_id = (req, res) => {
    const search_article_sql = `select * from ev_article_cate where id=?`;
    db.query(search_article_sql, req.params.id, (err, results) => {
        /*执行 SQL 语句失败*/
        if (err)
            return res.cc(err);
        /*SQL 语句执行成功，但是查询数据不等于 1 */
        if (results.length !== 1)
            return res.cc('获取文章分类数据失败');

        /*查询 SQL 数据成功*/
        res.send({
            status: 0,
            msg: '获取文章分类数据成功',
            data: results[0]
        });
    });
};

/*更新文章分类处理函数*/
exports.update_cate_id = (req, res) => {
    /*查询 分类名称与分类别名 是否被占用*/
    const search_data_sql = `select * from ev_article_cate where id=? and (name=? or alias=?)`;
    db.query(search_data_sql, [req.body.id, req.body.name, req.body.alias], (err, results) => {
        /*执行 SQL 语句失败*/
        if (err)
            return res.cc(err);
        /* 分类名称 和 分类别名 都被占用*/
        if (results.length === 2)
            return res.cc('分类名称与别名被占用，请更换后重试！')
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias)
            return res.cc('分类名称与别名被占用，请更换后重试！')
        /*分类名称 或 分类别名 被占用*/
        if (results.length === 1 && results[0].name === req.body.name)
            return res.cc('分类名称被占用，请更换后重试！')
        if (results.length === 1 && results[0].alias === req.body.alias)
            if (results.length === 1 && results[0].alias === req.body.alias)
                return res.cc('分类别名被占用，请更换后重试！')

        /*更新文章分类*/
        const update_article_sql = `update ev_article_cate set ? where id=?`;
        db.query(update_article_sql, [req.body, req.body.id], (err, results) => {
            /*执行SQL语句失败*/
            if (err)
                return res.cc(err);
            /*SQL 语句执行成功，但是影响行数不等于 1 */
            if (results.affectedRows !== 1)
                return res.cc('更新文章分类失败');

            /*更新文章分类成功*/
            res.cc('更新文章分类成功', 0);
        });
    })
}