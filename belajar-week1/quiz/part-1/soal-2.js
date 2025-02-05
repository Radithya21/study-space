// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

/* algoritma
- melakukan pengecekan berdasarkan bulan dalam bentuk angka
- print tanggal dan tahun dengan mengambil dari variabel diatas
- variabel diganti dengan value berupa nama bulan */

let tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 11; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2003; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
switch (bulan) {
    case 1: 
        console.log (`tanggal : ${tanggal} Januari ${tahun}`)
        break
    case 2: 
        console.log (`tanggal : ${tanggal} Februari ${tahun}`)
        break
    case 3: 
        console.log (`tanggal : ${tanggal} Maret ${tahun}`)
        break
    case 4: 
        console.log (`tanggal : ${tanggal} April ${tahun}`)
        break
    case 5: 
        console.log (`tanggal : ${tanggal} Mei ${tahun}`)
        break
    case 6: 
        console.log (`tanggal : ${tanggal} Juni ${tahun}`)
        break
    case 7: 
        console.log (`tanggal : ${tanggal} Juli ${tahun}`)
        break
    case 8: 
        console.log (`tanggal : ${tanggal} Agustus ${tahun}`)
        break
    case 9: 
        console.log (`tanggal : ${tanggal} September ${tahun}`)
        break
    case 10: 
        console.log (`tanggal : ${tanggal} Oktober ${tahun}`)
        break
    case 11: 
        console.log (`tanggal : ${tanggal} November ${tahun}`)
        break
    case 12: 
        console.log (`tanggal : ${tanggal} Desember ${tahun}`)
        break
    default :
        console.log("data tidak valid, tolong periksa lagi!!")
        break
}