function hitung() {
    // mengambil element DOM dan melakukan storing / menyimpan ke dalam variabel

    let hargaTehGelas, hargaPermenSugus, HargaChikiTaro, hargaGranita;
    hargaTehGelas = 0;
    hargaPermenSugus = 0;
    HargaChikiTaro = 0;
    hargaGranita = 0;

    // variabel nilai checkbox
    let tehGelas, permenSugus, chikiTaro, granita;

    tehGelas = parseInt(document.getElementById('tehgelas').value);
    permenSugus = parseInt(document.getElementById('permenSugus').value);
    chikiTaro = parseInt(document.getElementById('chikiTaro').value);
    granita = parseInt(document.getElementById('granita').value);

    // variabel nilai textbox
    let jumlahTehGelas, jumlahPermenSugus, jumlahChikiTaro, jumlahGranita;

    jumlahTehGelas = parseInt(document.getElementById('jumlahTehGelas').value);
    jumlahPermenSugus = parseInt(document.getElementById('jumlahPermenSugus').value);
    jumlahChikiTaro = parseInt(document.getElementById('jumlahChikiTaro').value);
    jumlahGranita = parseInt(document.getElementById('jumlahGranita').value);

    // variabel checkbox | true || false
    let checkedTehGelas, checkedPermenSugus, checkedChikiTaro, checkedGranita;

    checkedTehGelas = document.getElementById('tehgelas').checked;
    checkedPermenSugus = document.getElementById('permenSugus').checked;
    checkedChikiTaro = document.getElementById('chikiTaro').checked;
    checkedGranita = document.getElementById('granita').checked;

    // get id pesanan
    jumlahPesanan = document.getElementById('totalPesanan');
    jumlahHargaTotal = document.getElementById('totalHarga');
    jumlahHargaFinal = document.getElementById('totalHargaFinal');


    // melakukan pengkondisian
    // object teh gelas
    if (checkedTehGelas == true) {
        // cek jika checkbox bernilai / tidak null
        if (checkedTehGelas == !null) {

            hargaTehGelas = tehGelas * jumlahTehGelas

            console.log(hargaTehGelas)
        } else {
            console.log('teh gelas tidak ada isinya');
        }
    } else {
        console.log('teh gelas tidak di centang');
    }

    // melakukan pengkondisian
    // object permen sugus
    if (checkedPermenSugus == true) {
        // cek jika checkbox bernilai / tidak null
        if (checkedPermenSugus == !null) {

            hargaPermenSugus = permenSugus * jumlahPermenSugus;

            console.log(hargaPermenSugus)
        } else {
            console.log('permen sugus tidak ada isinya');
        }
    } else {
        console.log('permen sugus tidak di centang');
    }

    // melakukan pengkondisian
    // object chiki taro
    if (checkedChikiTaro == true) {
        // cek jika checkbox bernilai / tidak null
        if (checkedChikiTaro == !null) {

            HargaChikiTaro = chikiTaro * jumlahChikiTaro;

            console.log(HargaChikiTaro);
        } else {
            console.log('chiki taro tidak ada isinya');
        }
    } else {
        console.log('chiki taro tidak di centang');
    }

    // melakukan pengkondisian
    // object granita
    if (checkedGranita == true) {
        // cek jika checkbox bernilai / tidak null
        if (checkedGranita == !null) {

            hargaGranita = granita * jumlahGranita;

            console.log(hargaGranita)
        } else {
            console.log('granita tidak ada isinya');
        }
    } else {
        console.log('granita tidak di centang');
    }

    // mengechek kondisi jika checkbox di centang
    if (checkedTehGelas == true || checkedPermenSugus == true || checkedChikiTaro == true || checkedGranita == true) {
        // cek jika checkbox tidak bernilai null / kosong
        if (checkedTehGelas == !null || checkedPermenSugus == !null || checkedChikiTaro == !null || checkedGranita == !null) {

            totalPesanan = jumlahGranita + jumlahPermenSugus + jumlahChikiTaro + jumlahTehGelas;
            jumlahPesanan.innerHTML = "Jumlah Pesanan : " + totalPesanan;


            console.log("total pesanan adalah " + totalPesanan);

        } else {
            console.log('cek checkbox belum di centang');
        }
    }

    // cek jika cekbox di centang dan cekbox tidak dicentang ambil valuenya
    if (checkedTehGelas == true || checkedTehGelas == !NaN ||
        checkedPermenSugus == true || checkedPermenSugus == !NaN ||
        checkedChikiTaro == true || checkedChikiTaro == !NaN ||
        checkedGranita == true || checkedGranita == !NaN) {

        totalHargaPesanan = hargaTehGelas + hargaPermenSugus + HargaChikiTaro + hargaGranita;
        jumlahHargaTotal.innerHTML = "Total harga : " + totalHargaPesanan;
        jumlahHargaFinal.value = totalHargaPesanan;

        console.log(totalHargaPesanan);


    }





}

// membuat function kembalian
function kembalian() {
    popupkembalian = document.getElementById('popupkembalian');
    popupkembalian.style.display = "block";

    // get value kembalian
    let uangPembeli = document.getElementById('uangPembeli').value;
    let jumlahKembalianFinal = document.getElementById('jumlahKembalian');
    let jumlahHargaBeliFinal = document.getElementById('jumlahHargaBeli');
    let jumlahUangPembeli = document.getElementById('jumlahUangPembeli');

    let totalKembalian = uangPembeli - totalHargaPesanan;

    jumlahUangPembeli.innerHTML = "jumlah " + uangPembeli;
    jumlahKembalianFinal.innerHTML = "jumlah " + totalKembalian
    jumlahHargaBeliFinal.innerHTML = "jumlah " + totalHargaPesanan;

    console.log(totalKembalian);


}

// membuat function hide element 
function hide() {
    popupkembalian = document.getElementById('popupkembalian');
    popupkembalian.style.display = "none";
}