// function callName(name = "anonimous"){
//     console.log('function start');
//     console.log(`My nama is ${name}`);
//     return 'test'
//     console.log('function end');

// }

// const myName = "risano"

// callName(myName)
// callName('budi')
// callName()


function penjumlahan(val1, val2){
    const hasil = val1 + val2
    return hasil
}

const result =  penjumlahan(10, 5)

const bagi2  = result / 2

// console.log(bagi2);

const pembagian = function(val1, val2){
    const hasil = val1 / val2
    return hasil
}

const hasilPembagian = pembagian(20, 4)
// console.log(hasilPembagian);


const callIdentitas = (name, address) =>`My Name is ${name}, from ${address}`

const resultMe = callIdentitas('risano', 'padang')
// console.log(resultMe);

const biodata = {
    name: 'risano',
    callIdentitas:(name, address)=>`My Name is ${name}, from ${address}`
}
const dataSaya = biodata.callIdentitas('risano', 'padang')

console.log(dataSaya);