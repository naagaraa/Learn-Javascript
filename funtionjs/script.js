// function hapus() {
//     let text = document.getElementById('kalimat');
//     text.innerHTML = '';
// }

function tambah() {
    var x = parseInt(document.getElementById('angka1').value);
    var y = parseInt(document.getElementById('angka2').value);
    var result = document.getElementById('result');


    // console.log(typeof x);

    // console.log(x, y);
    var hasil = x + y;
    // console.log(hasil);

    result.innerHTML = 'hasilnya adalah ' + hasil;

}