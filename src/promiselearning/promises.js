function wait(ms){
return new Promise((res)=>{
    setTimeout(()=>{res()},ms)
})
}

export async function run(){
    await wait(1000)
    console.log(1);
    await wait(1000)
    console.log(2);
    await wait(1000)
    console.log(3);
}

wait(1000).then(()=>{console.log(1), wait(1000)}).then(()=>{console.log(2);wait(1000)}).then(()=>console.log(3))