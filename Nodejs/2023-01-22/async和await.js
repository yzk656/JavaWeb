// async function func(){
//     /*如果await后面接的是基本数据类型，会对这个基本数据类型进行包装，包装成一个promise对象*/
//     let data1=await 123;
//     return data1;
// }
// let a1=func();
// /*由于async await 是异步函数，因此会等log执行完后才会执行func函数*/
// console.log(a1);//Promise { <pending> }
// a1.then((value)=>{
//     console.log(value);
// });


/*外部错误处理*/
/*
async function func(){
    /!*如果await后面接的是基本数据类型，会对这个基本数据类型进行包装，包装成一个promise对象*!/
    let data1=await new Promise((resolve,reject)=>{
        reject('出错了！！');
    });
    return data1;
}
let a1=func();
/!*由于async await 是异步函数，因此会等log执行完后才会执行func函数*!/
console.log(a1);//Promise { <pending> }
/!*错误处理（外部）*!/
a1.catch((reason)=>{
    console.log(reason);
})
// a1.then((value)=>{
//     console.log(value);
// });
*/

/*内部错误处理 使用try-catch*/
async function func(){
    try{
        //如果await后面接的是基本数据类型，会对这个基本数据类型进行包装，包装成一个promise对象
        let data1=await new Promise((resolve,reject)=>{
            reject('出错了！！');
        });
        return data1;
    }catch (error){
        console.log(error);
    }
}
let a1=func();
//由于async await 是异步函数，因此会等log执行完后才会执行func函数
console.log(a1);//Promise { <pending> }
// a1.then((value)=>{
//     console.log(value);
// });