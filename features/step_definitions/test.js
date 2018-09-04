var sleep = function(time){
return new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('ok');
        //reject('error')
    },time)
})
}

var start =async function(){
    for (var i=0;i<=10;i++){
        console.log(`当前是第${i}次等待..`);
        await sleep(1000);
    }
};

start();