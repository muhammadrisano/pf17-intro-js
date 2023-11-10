// untuk memasukan array ke dalam array lain
const hobi = ['ngoding', 'joging', 'gaming']

// const newHobi = [...hobi, 'writing', 'swimming']
// hobi.push('writing')
// hobi.push('swimming')
// console.log(hobi);

// menggabungkan 2 array
// const makan1= ['barmabak', 'bakso', 'pangsit']

// const makan2 = ['pisang', 'anggur', 'apel']

// const semuaMakan = [...makan2, ...makan1]

// console.log(semuaMakan);


// mengcopy / clone object
// const bidoata = {
//     nama: 'risano',
//     alamat: 'padang',
//     email: 'risano@mgail.com'
// }

// const myBiodata = {...bidoata}
// myBiodata.nama = "risano akbar"

// console.log(bidoata);


const oldBiodata = {
    nama: 'risano akbar',
    alamat: 'padang',
    email: 'risano@gmail.com',
    isMeried: false
}

const newBiodata = {
    nama: 'm. risano akbar',
    email:'risano2@gmail.com',
    jender: 'laki-laki'
}

const resultBiodata = {
    ...oldBiodata,
    ...newBiodata
}

console.log(resultBiodata);
