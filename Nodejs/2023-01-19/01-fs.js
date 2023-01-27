/*系统自定义模块引入只需要模块名*/

/*fs 文件系统 :文件增删改查*/
var fs=require('fs');
// var html = fs.readFileSync('../2023-01-18/02-http.js');
var html=fs.readFile('../2023-01-18/02-http.js',function (error,data){
    console.log(data,'callback');
});

/*Buffer 类似于数组 所有的数值都是16进制*/
console.log(html,'html');
/*<Buffer 2f 2a 6e 6f 64 65 6a 73 20 e5 8f af e4 bb a5 e7 94 a8 e4 ba 8e e5 88 9b e5 bb ba 77 65 62
e6 9c 8d e5 8a a1 e5 99 a8 2a 2f 0d 0a 0d 0a 2f 2a e5 bc 95 ... 642 more bytes>
*/
console.log(html.toString());
