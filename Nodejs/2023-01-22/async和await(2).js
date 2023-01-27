// function get_sum(a, b) {
//     return a + b;
// }
//
// let a1 = get_sum(1, 2);
// let a2 = get_sum(1, 3);
// let a3 = get_sum(1, 8);
// console.log(a1 + a2 + a3);

/*引入模块*/
const fs = require('fs');
const path = require('path');

/*获取文件路径*/
let file_one = path.join(__dirname, '1.txt');
let file_two = path.join(__dirname, '2.txt');
let file_three = path.join(__dirname, '3.txt');
let file_data = path.join(__dirname, 'data.txt');

/*封装一个函数*/
function read_file_promise(filename) {
    return new Promise((resolve, reject) => {
        /*异步操作*/
        fs.readFile(filename, 'utf-8', (error, data) => {
            if (error) {
                reject(error);
            }
            resolve(data);/*data就是读取到的内容*/
        });
    });
}

/*await必须放在async function（异步函数）函数内部*/

/*async比普通函数多一个功能，就是能够使用await
    外观是同步执行的，实质上还是异步
    异步操作 顺序执行
    async await一般后面就是接promise对象
* */
async function func1() {
    console.log(3);
    let p1 = await read_file_promise(file_one);//直接拿到promise对象成功的数据,不需要使用then了【不用再等log函数执行完再执行异步这种情况】
    console.log(4);
    let p2 = await read_file_promise(file_two);
    let p3 = await read_file_promise(file_three);
    fs.writeFile(file_data, p1 + p2 + p3, 'utf-8', (error) => {
        if (error) {
            console.log('写入出错了！！！');
        } else {
            console.log('写入成功了！！！');
        }
    });
}

console.log(1);
func1();
console.log(2);
/*答案：1324
    因为await才是异步操作，async是一个普通函数
* */

// /*定义全局变量，接收文件内容*/
// let str='';
// p1.then((value)=>{
//     str+=value;
//     return p2;
// }).then((value)=>{
//     str+=value;
//     return p3;
// }).then((value)=>{
//    str+=value;
//     console.log(str);
// });