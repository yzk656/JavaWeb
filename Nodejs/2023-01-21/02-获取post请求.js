const http = require('http');
const port = 8080;
const server = http.createServer((request, response) => {
    /*获取账号和密码，获取post请求参数*/
    /*以事件名的方式来接收，事件名就是data,触发post请求，就会触发这个代码*/
    request.on('data', (postData) => {
        /*postdata就是接收到的参数*/
        console.log(postData.toString());
    });
    response.end('hello 123');
});
server.listen(port, (error) => {
    console.log('8080端口正在监听！！！');
});