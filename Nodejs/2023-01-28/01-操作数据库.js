/*导入MySQL模块*/
const mysql = require('mysql');

/*建立与 mysql 的数据库连接*/
const db = mysql.createPool({
    host: '127.0.0.1',  //数据库的 IP 地址
    user: 'root',       //登录数据库的账号
    password: 'yzk',    //登录数据库的密码
    database: 'my_db_01'//指定要操作哪个数据库
});

/*测试 MYSQL 模块是否正常工作*/
// db.query('select 1',(error,results)=>{
//     if(error){
//         console.log('出现了错误'+error.message);
//     }
//     else{
//         console.log(results);
//     }
// });

/*查询 users 表中所有数据*/
// const sql_str='select * from users';
// db.query(sql_str,(error,results)=>{
//     if(error)
//         return console.log('发生了错误'+error.message);
//     /*注意： 如果执行的是 select 查询语句，则执行的结果是数组*/
//     else
//         console.log(results);
// });

// /*插入数据*/
// const user = {
//     username: 'spider-man',
//     password: 'pcc123'
// };
// const sql_str = 'insert into users (username,password) values (?,?)';
// db.query(sql_str, [user.username, user.password], (error, results) => {
//     if (error)
//         return console.log(error.message);
//     /*注意： 如果执行的是 insert into 插入语句，则 results 是一个对象
//         可以通过 affectedRows 属性，来判断是否插入数据成功
//     * */
//     if (results.affectedRows === 1)
//         console.log('插入成功！');
// });


/*演示插入数据的便捷方式*/
// const user = {
//     username: 'spider-man',
//     password: 'pcc123'
// };
// const sql_str = 'insert into users set ?';
// db.query(sql_str, user, (err, results) => {
//     if (err)
//         return console.log(err.message);
//     if (results.affectedRows === 1)
//         console.log('插入成功！！');
// });

/*演示如何更新用户信息*/
// const user = {
//     id: 5,
//     username: 'aaa',
//     password: '000'
// };
// const sql_str = 'update users set username=?,password=? where id=?';
// db.query(sql_str,[user.username,user.password,user.id],(err,results)=>{
//     if(err)
//         return console.log(err.message);
//     if(results.affectedRows===1)
//         console.log('更新成功！！');
// });

/*演示更新数据的便捷方式*/
// const user = {
//     id: 5,
//     username: 'aaa',
//     password: '001'
// };
// const sql_str='update users set ? where id=?';
// db.query(sql_str,[user,user.id],(err,results)=>{
//     if(err)
//         return console.log(err.message);
//     if(results.affectedRows===1)
//         console.log('更新成功');
// });

/*演示删除数据*/
// const sql_str='delete from users where id=?';
// db.query(sql_str,4,(err,results)=>{
//     if(err)
//         return console.log(err.message);
//     if(results.affectedRows===1)
//         console.log('删除成功');
// });


/*演示标记删除*/
const sql_str = 'update users set status=? where id=?';
db.query(sql_str, [1, 5], (err, results) => {
    if (err)
        return console.log(err.message);
    if (results.affectedRows === 1)
        console.log('标记删除成功');
});
