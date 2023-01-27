/*引入fs模块*/
const fs=require('fs');
/*引入path模块*/
const path=require('path');
let file_path=path.join(__dirname,'hello.txt');

/*异步读取*/
/*需要三个参数，第三个参数回调函数*/
fs.readFile(file_path,'utf-8',(error,date)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(date);
});
console.log('你好');