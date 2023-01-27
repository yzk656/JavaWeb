const data={
    name:'yangzhenkun2',
};

//处理数据
function handle(data){
    //获取result元素
    const result=document.querySelector('#result');
    result.innerHTML=data.name;
}

handle(data);