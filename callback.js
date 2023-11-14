// const penjumlahan = (val1, val2, callback)=>{
//     const result = val1 + val2
//     callback(result)
// }

// const print = (data)=>{
//     console.log(`hasil dari penjumalahn adalah ${data}`);
// }

// penjumlahan(20, 10, print)

// const logicPrint = (item)=>{
//     console.log(item);
// }

// hobies.map(logicPrint)

// const sayHelo=(name)=>{
//     console.log(`my name is ${name}`);
// }

// const app = sayHelo

// app('risano')


// const print = (data)=>{
//     console.log(`hasil dari penjumalahn adalah ${data}`);
// }

const penjumlahan = (val1, val2, callback)=>{
    const result = val1 + val2
    callback(result)
}

penjumlahan(10,15, (result)=>{
    console.log(result);
})