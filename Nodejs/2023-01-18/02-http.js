/*nodejs 可以用于创建web服务器*/

/*引入http模块*/
/*require 可以认为是<script srx="xxx"></script>*/
var http=require('http');
// console.log(http);

var server=http.createServer(function (request,response){
    // console.log(request.url);
    // console.log(request.method);
    console.log(request.connection.remoteAddress);

    /*解决乱码*/
    response.setHeader('content-type','text/html;charset=utf-8');

    /*响应一段文本 并且结束响应*/
    response.end(`<h1>网站建设中。。。</h1><h3>${new Date().toLocaleDateString()}</h3>`);
});

server.listen(3000,function (){
    console.log('正在监听3000端口！！！');
});