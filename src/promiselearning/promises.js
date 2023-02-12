//

// function wait(ms){
// return new Promise((res)=>{
//     setTimeout(()=>{res()},ms)
// })
// }

// async function run(){
//     await wait(1000)
//     console.log(1);
//     await wait(1000)
//     console.log(2);
//     await wait(1000)
//     console.log(3);
// }

// wait(1000).then(()=>{console.log(1), wait(1000)}).then(()=>{console.log(2);wait(1000)}).then(()=>console.log(3))

function mango(quantity, price) {
    let freeMango=Math.floor( quantity / 3)
    return (quantity - freeMango) * price

}

mango(3, 3)