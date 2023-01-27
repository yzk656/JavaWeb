/*引入fs模块*/
const fs=require('fs');
/*引入path模块*/
const path=require('path');
let file_path=path.join(__dirname,'hello.txt');

/*异步写入*/
var str='hello node';
fs.writeFile(file_path,str,'utf-8',(error)=>{
    if(error){
        console.log(error);
        return;
    }else{
        console.log('写入成功！！！');
    }
});
/*写入不是进行叠加 而是进行覆盖*/

/*保存数据是在数据库中*/
/*常用方法*/
/*修改文件名*/
// fs.renameSync('旧文件名','旧文件名');
fs.renameSync('hello.txt','hello1.txt');

/*fs.readdirSync获取当前路径下的所有文件名*/
let path1=fs.readdirSync(__dirname);
console.log(path1);

let str1='hello';
console.log(str1.endsWith('lo'));
console.log(str1.startsWith('he'));
console.log(str1.substring(2));
console.log(str1.substring(0,1));