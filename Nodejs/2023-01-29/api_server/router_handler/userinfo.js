/**
 * 这里定义获取用户信息模块，供./router/userinfo 使用
 */

/*导入数据库操作模块*/
const db = require('../db/index');
/*导入判断密码是否一致的模块*/
// 在头部区域导入 bcryptjs 后，
// 即可使用 bcrypt.compareSync(提交的密码，数据库中的密码) 方法验证密码是否正确
// compareSync() 函数的返回值为布尔值，true 表示密码正确，false 表示密码错误
const bcrypt = require('bcryptjs');


/*获取用户信息的处理函数*/
exports.get_userinfo = (req, res) => {
    /*根据用户 id ，查询用户信息*/
    const get_info_sql = `select id,username,nickname,email,user_pic from ev_users where id=?`;
    /*注意： req 对象上的 user 属性，是token 解析成功，express-jwt中间件帮我们挂载上去的*/
    db.query(get_info_sql, req.user.id, (err, results) => {
        /*执行sql 语句失败*/
        if (err)
            return res.cc(err);
        /*执行sql语句成功，但是查询到的数据条数不等于 1 */
        if (results.length !== 1)
            return res.cc('获取用户信息失败');

        /*将用户信息响应给客户端*/
        res.send({
            status: 0,
            msg: '获取用户基本信息成功',
            data: results[0]
        });
    });
};

/*更新用户基本信息的处理函数*/
exports.update_userinfo = (req, res) => {
    const update_userinfo_sql = `update ev_users set ? where id=?`;
    db.query(update_userinfo_sql, [req.body, req.body.id], (err, results) => {
        /*执行 sql 语句失败*/
        if (err)
            return res.cc(err);
        /*执行 sql 语句成功，但是影响行数不为 1 */
        if (results.affectedRows !== 1)
            return res.cc('修改用户基本信息失败');

        /*修改用户信息成功*/
        return res.cc('修改用户基本信息成功', 0);
    });
};

/*重置密码处理函数*/
exports.update_password = (req, res) => {
    /*定义根据 id 查询用户数据的 SQL 语句*/
    const search_user_sql = `select * from ev_users where id=?`;
    /*执行 SQL 语句查询用户是否存在*/
    db.query(search_user_sql, req.user.id, (err, results) => {
        /*执行 SQL 语句失败*/
        if (err)
            return res.cc(err);
        /*检查指定 id 的用户是否存在*/
        if (results.length !== 1)
            return res.cc('用户不存在');

        /*TODO:判断提交的旧密码是否正确*/
        const compare_result = bcrypt.compareSync(req.body.oldPwd, results[0].password);
        if (!compare_result) return res.cc('原密码错误');

        /*定义更新用户密码的 SQL 语句*/
        const update_pwd_sql = `update ev_users set password=? where id=?`;
        /*对新密码进行加密处理*/
        const new_pwd = bcrypt.hashSync(req.body.newPwd, 10);
        /*执行 SQL 语句，根据 id 更新用户密码*/
        db.query(update_pwd_sql, [new_pwd, req.user.id], (err, results) => {
            /*执行 SQL 语句失败*/
            if (err)
                return res.cc(err);
            /*执行 SQL 语句成功，但是影响函数不等于 1 */
            if (results.affectedRows !== 1)
                return res.cc('更新密码失败');

            /*更新密码成功*/
            res.cc('更新密码成功', 0);
        });
    });
}

/*更新用户头像的处理函数*/
exports.update_avatar = (req, res) => {
    const update_avatar_sql = `update ev_users set user_pic=? where id=?`;
    db.query(update_avatar_sql,[req.body.avatar,req.user.id],(err,results)=>{
       /*执行 SQL 语句失败*/
        if(err)
            return res.cc(err);
        /*执行 SQL 语句成功，但是影响行数不等于 1 */
        if(results.affectedRows!==1)
            return res.cc('更新头像失败');
        /*更新头像成功*/
        return res.cc('更新头像成功',0);
    });
}
