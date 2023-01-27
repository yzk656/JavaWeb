/*搭建第一个后端程序*/
/*  1. 导入http模块
    2. 定义服务程序的端口号
    3. 创建服务器对象
    4. 调用服务器的监听方法，让服务器监听浏览器请求
* */
const http=require('http');
const port=8080;
const server=http.createServer((request,response)=>{
    /*这里的代码每收到一次请求就会执行一次*/
    /*write只能写在end前面*/
    response.write('nihao');
    response.end('hello nodejs');

});
server.listen(port,(error)=>{
    /*用来监听有没有出错*/
    if(error){
        console.log(error);
    }else{
        console.log('服务器已经运行成功了！！！');
    }
});

/*一个端口号只能被一个服务器使用，如果端口号被占用，就换一个
    end永远放在响应的最后面，多次调用没有效果
* */
