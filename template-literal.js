const nilaiIPA = 90
const nilaiiPS = 70

// contact

/*  nilai IPA adala 90
    nilai IPS adalah 80
    rata-rata dari nilai tersebut adalah 85

*/

const text = 'nilai IPA adalah '+nilaiIPA +'\nNilai IPS adalah '+nilaiiPS +'\nrata-rata dari nilai tersebut adalah '+ (nilaiIPA+nilaiiPS) /2 

console.log(text);

// template literal

const text2 = `nilai IPA adalah ${nilaiIPA}
nilai IPS adalah ${nilaiiPS}
rata-rata adalah ${(nilaiIPA + nilaiiPS) / 2}`