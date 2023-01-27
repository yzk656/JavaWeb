const http = require('http');
const port = 8080;
const fs=require('fs');
const path=require('path');
const server = http.createServer((request, response) => {
    /*判断浏览器的请求，需要什么文件*/
    let req_url=request.url;
    if(req_url=='/'||req_url=='/index.html'){
        let file_path=path.join(__dirname,'assets','html','index.html');
        let content=fs.readFileSync(file_path)
        response.end(content);
    } else if(req_url=='/cate.html'){
        let file_path=path.join(__dirname,'assets','html','cate.html');
        let content=fs.readFileSync(file_path)
        response.end(content);
    }else if(req_url.endsWith('.css')){
        /*由于添加css，浏览器会自发产生请求，因此需要我们队请求作出响应*/
        let file_path=path.join(__dirname,'assets','css','index.css');
        let content=fs.readFileSync(file_path)
        response.end(content);
    }else{
        response.end('404,报错了！！！');
    }
});
server.listen(port, (error) => {
    console.log('8080端口正在监听！！！');
});

/*第三方模块，进行安装*/
/*npm init：项目初始化*/
/*package.json记录项目相关信息*/
/*-g 全局安装*/
