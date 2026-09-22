

// Komentar

// Aktivitas 1 : Setup Berkas & Integrasi Javascript (script.js)
// Mencetak sebuah nilai = console.log("Teks")

console.log("=== Kalkulator Nilai Rapor Kelas ===");
console.log("Javascript Terhubung!");

// Variabel "const" = Konstanta sifatnya tetap dan tidak bisa diubah
const NAMA_KAMPUS = "UPI PWK"; // Nama kampus  x tidak bisa diubah karna constanta
const MATA_KULIAH = ["Promnet", "Jarkom", "SCM"]; // sama tidak bisa diubah juga

// Variabel Let = "Let" digunakan untuk nilai yang bisa diubah sewaktu-waktu
let NAMA_GURU = "Pak Zamzam"; // Nama guru berubah untuk guru yang menagajar
let KELAS_PRAKTIKUM = "LAB B"; // nama kelas yang kita pakai juga bisa berubah

// cetak nilai-nilai dari variabel let dan variabel const
// Operator + digunakan untuk menggabungkan teks string


console.log("Kampus : " + NAMA_KAMPUS); // Tampilkan nama kampus
console.log("Kelas : " + KELAS_PRAKTIKUM); // Tampilkan nama kelas
console.log("Guru : " + NAMA_GURU); // Tampilkan nama guru

// Demo perbedaan variabel const dan let

NAMA_GURU = "Pak Adelio"; // NAMA_GURU variabel let
console.log("Guru Baru (Setelah diubah dengan variabel let) " + NAMA_GURU);

// Menggunakan variabel const 
// NAMA_KAMPUS = "UPI BUMSIL"; // Akan terjadi error Uncaught Typeerror

// Input interaktif
// Alert ini berfungsi sebagai dialog pop up
alert("Selamat Datang Diaplikasi Kalkulator Nilai Rapor! ");

let NAMA_MAHASISWA = prompt("Halo! Masukan nama kamu untuk memulai : ");

// Conditional Statement IF, ELSE IF, ELSE
// Tulis "if (NAMA_MAHASISWA"
// Maksudnya adalah "jika NAMA_MAHASISWA ada isinya" jalankan blok diatas
// "else" : jika tidak sesuai sesuai, tidak memenuhi atau kosong jalankan blok bawah

if(NAMA_MAHASISWA) {
    // Jika user mengisi nama :
    alert("Halo, " + NAMA_MAHASISWA + "! Yuk kita hitung nilai rapor kamu.");
    console.log("Siswa yang aktif: " + NAMA_MAHASISWA);
} else{
    // Jika user tidak mengisi nama (kosong) maka ia dipanggil anonim
    alert("Kamu tidak memasukkan nama. Kamu dipanggil Mahasiswa Anonymous");
    NAMA_MAHASISWA = "Siswa Anonim";
    console.log("Siswa yang aktif: " + NAMA_MAHASISWA);
}

// operasi aritmatika - hitung nilai rata-rata

let NILAI_PROMNET = 80;
let NILAI_JARKOM = 75;
let NILAI_SCM = 90;

// Menjumlahkann nilai
let JUMLAH_NILAI = NILAI_PROMNET + NILAI_JARKOM + NILAI_SCM;

// bagi hasil perjumlahan dibagi 3
let NILAI_RATARATA = JUMLAH_NILAI / 3;

// cetak nilainya/ output
console.log("NILAI" + NAMA_MAHASISWA + "EAK");
console.log("PROMNET : " + NILAI_PROMNET);
console.log("JARKOM : " + NILAI_JARKOM);
console.log("SCM : " + NILAI_SCM);

// Tampilkan jumlah nilai
console.log("Jumlah nilai kamu adalah" + JUMLAH_NILAI);

// tampilkan nilai rata-rata
console.log("Nilai rata-rata adalah " + NILAI_RATARATA);

// Percabangan IF ELSE untuk menentukan predikat = A, B, C, D

// Buat predikat kosong -> String kosong
let PREDIKAT = ""; // Akan diisi Grade/ predikat A, B, C, D
let KETERANGAN = ""; // Diisi keterangan A -> sangat baik

// Percabangan / conditional statement ELSE IF

if(NILAI_RATARATA >= 90) {
    // Kondisi yang pertama kali dicek : apakah nilainya memenuhi
    PREDIKAT = "A";
    KETERANGAN = "SANGAT BAIK";
} else if (NILAI_RATARATA >=80){
    // Kondisi pertama jika kondisi pertama tidak memenuhi
    PREDIKAT = "B";
    KETERANGAN = "BAIK";
} else if (NILAI_RATARATA >= 70){
    // Kondisi ketiga jika kondisi pertama dan kedua tidak terpenuhi
    PREDIKAT = "C";
    KETERANGAN = "CUKUP";
} else {
    // Jika kondisi semua tidak memenuhi (RATA-RATA < 70)
    PREDIKAT = "D";
    KETERANGAN = "PERLU PERBAIKAN NILAI WKWK";
}

// Tampilkan nilai percabangan IF ELSE IF ELSE

console.log("Predikat : " + PREDIKAT+"-" + KETERANGAN);

// Tampilkan pop up alert
alert(
    "HASIL RAPOR" + NAMA_MAHASISWA + ":\n" +
    "RATA-RATA" + NILAI_RATARATA +"\n" +
    "PREDIKAT" + PREDIKAT +" (" + KETERANGAN +") "
);

//FUNCTION cara membungkus sekumpulan kode menjadi satu blok
// Yang bisa dipanggil kapan saja dengan nama FUNCTIONnya
// Struktur nya : functionya PENJUMLAHAN (nilai1 + nilai2 + nilai3)

function HITUNG_RATARATA(n1, n2, n3){
    let JUMLAH = n1 + n2 + n3;
    return JUMLAH / 3;
}

function TENTUKAN_PREDIKAT(RATA){
    // setiap baris "IF" untuk menentukan predikat
    if(RATA >= 90) return "A - SANGAT BAIK";
    if(RATA >= 80) return "B - BAIK";
    if(RATA >= 70) return "C - CUKUP";
    return "D - PERBAIKAN NILAI YE";
}

// Buat variabel dulu
// rata-rata
let MAHASISWA_A = HITUNG_RATARATA (88, 92, 85);
// predikat
let MAHASISWA_A_PREDIKAT = TENTUKAN_PREDIKAT(MAHASISWA_A);

//Cetak tampilkan konsole
console.log("Rata-rata nilai mahasiswa A adalah" + MAHASISWA_A);
console.log("Predikatnya adalah" + MAHASISWA_A_PREDIKAT);

// ARRAY dan LOOPING RAJA TERAKHIR

// KOTAK PENYIMPANAN YANG DIISI NILAI
// DITULIS DENGAN [...]
// NOTES INDEX OF ARRAY DIMULAI DARI 0


// Contoh ARRAY daftar mahasiswa
let DAFTAR_MAHASISWA = [
    "ADELIO RAFA", // Posisi ke - 0 index o
    "ZAM-ZAM", // Posisi ke - 1 index 1
    "ABEY", // Posisi ke - 2 index ke 2
    "SAPTA", // Posisi ke -3 index ke 3
    "ZAHRA" // Posisi ke -4 index ke 4
    // Total panjang ARRAY ada 6
];

// Cetak ARRAY
console.log("=== Daftar Mahasiswa Kelas A" + KELAS_PRAKTIKUM + "===");

// Looping for

for(let i = 0; i <DAFTAR_MAHASISWA.length; i++) {
    console.log((i+1) + "." + DAFTAR_MAHASISWA[i]);
}

//.lenght
console.log("TOTAL MAHASISWA : " + DAFTAR_MAHASISWA.length + "Orang");
console.log("Praktikum Selesai War Is Over");


 