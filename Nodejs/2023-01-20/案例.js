/*把当前文件夹下的js文件的名字都添加前缀node-*/
const fs=require('fs');
let file=fs.readdirSync(__dirname);

/*第一种*/
/*for(var i=0;i<file.length;i++){
    if(file[i].endsWith('js')){
        fs.renameSync(file[i],'node'+file[i]);
    }
    if(i==file.length-1){
        console.log('修改成功');
    }
}*/

/*第二种*/
/*file.forEach(items=>{
    if(items.endsWith('js')){
        fs.renameSync(items,`node-${items}`);
    }
});*/


/*把当前文件夹下的js文件的名字都删除前缀node-*/
file.forEach(items=>{
    if(items.endsWith('js')&&items.startsWith('node')){
        fs.renameSync(items,items.substring(4));
    }
});