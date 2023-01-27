/*引入path内置模块*/
const path=require('path');

/*两个特殊变量*/
console.log(__dirname);//当前执行文件的绝对路径。但不包含本身这个文件名
console.log(__filename);//当前执行文件的绝对路径。包含本身这个文件名

let extname=path.extname(__filename);/*获取后缀名*/
console.log(extname);

let basename=path.basename(__filename);/*获取指定文件名*/
console.log(basename);

let dirname=path.dirname(__filename);/*获取指定文件名当前所在的绝对路径*/
console.log(dirname);

/*综合*/
let parse=path.parse(__filename);/*获取路径解析成一个字符串对象*/
console.log(parse);

/*拼接操作*/
/*多一层目录，多一个参数*/
let full_paath=path.join(__dirname,'module','path.js');
console.log(full_paath);