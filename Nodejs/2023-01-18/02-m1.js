let a=10;
function get_sum(a,b){
    return a+b;
}

/*导出方式1*/
// exports.a=a;
// exports.get_sum=get_sum;

/*导出方式2*/
/*通过module.exports等于一个对象，来导出数据*/
module.exports={
    a,get_sum
}
