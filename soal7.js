const dataPenjualanPakAdi = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warior Tristan Black Brown High',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct : 'Sepatu Warior Tristan Marron High',
        hargaSatuan : 360000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warior Rainbow Tosca Corduroy',
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
]

function hitungTotalPenjualan(dataPenjualan) {
   let totalPenjualan = 0;
  for (let i = 0; i < dataPenjualanPakAdi.length; i++) {
    totalPenjualan += dataPenjualanPakAdi[i].totalTerjual;
  }
  return "total sepatu yang terjual adalah " + totalPenjualan + " pasang";
}
console.log(hitungTotalPenjualan(dataPenjualanPakAdi))