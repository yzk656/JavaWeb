/*
* 这里定义和用户相关的路由处理函数，供 ./router/user.js 模块使用
*/

/*导入数据库操作模块*/
const db = require('../db/index');
/*导入bcryptjs[用于加密处理]*/
const bcryptjs = require('bcryptjs');
/*导入生成 Token 的包*/
const jwt=require('jsonwebtoken');
/*导入配置文件*/
const config=require('../config');


/*注册用户的处理函数*/
exports.reg_user = (req, res) => {
    /*接收表单数据*/
    const user_info = req.body;
    /*判断数据是否合法*/
    if (!user_info.username || !user_info.password) {
        return res.send({
            status: 1,
            message: '用户名或者密码不能为空'
        });
    }

    /*定义 sql 语句*/
    const sql = 'select * from ev_users where username=?';

    /*执行 sql 语句并根据结果判断用户名是否被占用*/
    db.query(sql, user_info.username, (err, results) => {
        /*执行 SQL 语句失败*/
        if (err) {
            // return res.send({
            //     status: 1,
            //     msg: err.message
            // });
            return res.cc(err);
        }
        /*如果用户名被占用*/
        if (results.length > 0) {
            // return res.send({
            //     status: 1,
            //     msg: '用户名被占用，请更换其他用户名'
            // });
            return res.cc('用户名被占用，请更换其他用户名');
        }
        /*调用 bcrypt.hashSync() 对密码进行加密*/
        user_info.password = bcryptjs.hashSync(user_info.password, 10);
        /*定义插入新用户的 SQL 语句*/
        const sql_add = 'insert into ev_users set ?';
        db.query(sql_add, {username: user_info.username, password: user_info.password}, (err, results) => {
            /*执行 SQL 语句失败*/
            if (err) {
                // return res.send({
                //     status: 1,
                //     msg: err.message
                // });
                return res.cc(err);
            }
            /*SQL 语句执行成功，但影响行数不为 1 */
            if (results.affectedRows !== 1) {
                // return res.send({
                //     status: 1,
                //     msg: '注册用户失败，请稍后再试'
                // });
                return res.send('注册用户失败，请稍后再试');
            }
            /*注册成功*/
            // res.send({
            //     status: 0,
            //     msg: '注册成功！！！'
            // })
            res.cc('注册成功！！！', 0);
        });
    });


};

/*登录的处理函数*/
exports.login = (req, res) => {
    const user_info = req.body;
    const login_query_sql = 'select * from ev_users where username=?';
    db.query(login_query_sql, user_info.username, (err, results) => {
        /*执行 sql 语句失败*/
        if (err)
            return res.cc(err);
        /*执行 sql 语句成功，但是查询到数据条数不等于 1 */
        if (results.length !== 1) {
            return res.cc('登陆失败');
        }

        /*判断密码是否正确*/
        const compare_result = bcryptjs.compareSync(user_info.password, results[0].password);
        if (!compare_result)
            return res.cc('登陆失败');

        /*TODO:在服务器端生成 Token 字符串*/
        const user = {...results[0],password:'',user_pic:''};
        /*生成 Token 字符串*/
        const token_str=jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn});
        res.send({
            status:0,
            msg:'登陆成功',
            token:'Bearer '+token_str
        })
    });
};
