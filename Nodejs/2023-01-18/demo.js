/*导入数据*/
/*导出的模块一般需要使用一个变量来接收，一般把接收的变量定义为常量*/
const m1=require('./02-m1.js');
const {globals} = require("../../javascript/swiper-master/.eslintrc");
console.log(m1);
console.log(m1.a);
console.log(m1.get_sum(1,2));

/*模块里面this的指向问题*/
/*在node中this代表当前模块，也就是exports对象*/
console.log(this===exports);

/*node里面没有window对象，但是有全局对象global*/
/*nodejs里面声明这个变量 不会被添加到global全局对象中*/
let a=10;
console.log(global.a);
/*可以给global添加成员*/
global.c=30;
console.log(global);