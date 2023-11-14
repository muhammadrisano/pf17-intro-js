// sort -> untuk melakukan sortin nilai a-z atau z-a

const myNilai = [90, 69, 75, 88, 30, 8]
const myHobies = ['ngoding','9etest', '9aming', 'swimming' , 'abc']
const myNilaiSorting = myNilai.sort((a, b)=> b-a)
const myHobiesSorting = myHobies.sort((a, b)=>{
    if(a < b) { return 1; }
    if(a > b) { return -1; }
    return 0;
})
// console.log(myHobiesSorting);


// map -> mapping data array

const  hobies = ['ngoding','9etest', '9aming', 'swimming' , 'joging', 'reading', 'writing']

console.log(hobies);

// for(let i = 0; i<hobies.length; i++){
//     console.log(`hobi ke ${i} = ${hobies[i]}`);
// }



 const newHobies = hobies.map((item, index)=>{
    return `${index}. ${item}`
})


// hobies.forEach((item, index)=>{
//     console.log(`hobie ke ${index} = ${item}`);
// })

// console.log(hobies);
// console.log(newHobies);

// split => untuk memecah / memotong nilai string menjadi array dengan spliter(karakter)


// const text = "saya ingin menjadi programmer"

// const textSplit = text.split(' ')
// const textReverse = textSplit.reverse()
// console.log(textReverse);

// join => untuk menggabungkan nilai array menjadi string dengan menggunakna seperator

// const resultText = textReverse.join(' ')
// console.log(resultText);

// const text = {name: "saya ingin menjadi programmer"}

// console.log(text);

// const resultText = text.split(' ').reverse().join(' ')
// console.log(resultText)