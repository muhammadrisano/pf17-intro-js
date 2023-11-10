// const nilai = 80;
// let keterangan = "";
// let grade = "";
// if (nilai > 85) {
//   keterangan = "Lulus";
// } else {
//   keterangan = "tidak lulus";
// }

// console.log(keterangan);

// if(nilai > 85){
//     grade = "A"
// }else if(nilai > 75){
//     grade ="B"
// }else if(nilai > 65){
//     grade = "C"
// }else if(nilai > 45){
//     grade= "D"
// }else{
//     grade = "E"
// }
// console.log(grade);

let hari = "";
const kodeHari = new Date("09/07/2023").getDay();

// 0-6

switch (kodeHari) {
  case 0:
    hari = "minggu";
    break;
  case 1:
    hari = "senin";
    break;
  case 2:
    hari = "selasa";
    break;
  case 3:
    hari = "Rabu";
    break;
  case 4:
    hari = "Kamis";
    break;
  case 5:
    hari = "Jumat";
    break;
  case 6:
    hari = "Sabut";
    break;
  default:
    hari = "maaf kode hari yang anda masukan salah";
}

console.log(hari);

// ternari operator
const nilai = 90;
let keterangan = nilai > 85 ? 'Selamat Anda Lulus': 'Maaf anda belum lulus';

console.log(keterangan);