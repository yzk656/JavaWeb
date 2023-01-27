/*引入fs模块*/
const fs=require('fs');
/*引入path模块*/
const path=require('path');
let file_path=path.join(__dirname,'hello.txt');
console.log(file_path);

/*使用fs的方法【sync 同步】*/
let content=fs.readFileSync(file_path);
console.log(content.toString());
/*使用utf-8转化Buffer*/
let content1=fs.readFileSync(file_path,'utf-8');
console.log(content1);
console.log('你好');