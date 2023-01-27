/*安装express*/

/*1，引入express*/
const express=require('express');
/*2. 创建app对象（项目对象）*/
const app=express();
/*4. 处理请求*/
/*第一个参数是请求路径，第二个参数是针对于这个路径的处理函数*/
app.get('/',(requestm,response)=>{
    /*函数里面有两个形参*/
    /*request：请求对象
      response：响应对象
    * */
    response.send('hello express框架');

});
/*3. 监听是否有请求*/
app.listen(3000,()=>{
    console.log('3000端口正在监听！！！');
});