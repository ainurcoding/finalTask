function hitungVoucher(uangBelanja, voucher = null) {
    if (voucher === "DumbWaysJos" && uangBelanja >= 50000) {
            diskon = (21.1/100) * uangBelanja;
            totalBayar = uangBelanja-diskon;
            kembalian = uangBelanja - totalBayar;
        }
    else if(voucher === "DumbWaysMantap" && uangBelanja >= 80000 ){
            diskon = (30/100) * uangBelanja;
            totalBayar = uangBelanja-diskon;
            kembalian = uangBelanja - totalBayar;
        }
    else {
        voucher = "tidak ada/tidak valid";
        diskon = 0;
        uangBelanja;
        totalBayar = uangBelanja;
        kembalian = uangBelanja - totalBayar;
    }
        console.log(uangBelanja +" "+voucher +" "+ diskon);
        console.log(
                    "\nVoucher yang digunakan :"+ voucher+
                    "\ndiskon :"+ diskon+
                    "\nUang yang harus dibayar :"+ totalBayar+
                    "\nkembalian :"+ kembalian
                    );   
}


hitungVoucher(90000, "DumbWaysMantap");



// function namaku(firstName = null, lastName = "Ridwan"){
//     return firstName+" "+lastName;
// }

// console.log(namaku("badrun"));


