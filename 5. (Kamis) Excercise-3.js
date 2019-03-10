var nama = "stephen";
var peran = "tabib";

if (nama === "" && peran === ""){

  console.log("Nama harus diisi!");

} else if (nama === "stephen" && peran === "") {

  console.log("Halo",nama, "Peran harus di isi");

} else if (nama === "stephen" && peran === "tabib") {

  console.log("Welcome to elder scroll world " + nama );
  console.log("Halo",peran ,nama, "Kamu dapat menyembuhkan warga dengan kemampuan pengobatanmu!" );

} else if (nama === "stephen" && peran === "ksatria") {

  console.log("Welcome to elder scroll world " + nama );
  console.log("Halo",peran ,nama, "Kamu dapat melindungi kota dengan kemampuan berpedang mu!" );

} else if (nama === "stephen" && peran === "penyihir") {

  console.log("Welcome to elder scroll world " + nama );
  console.log("Halo",peran ,nama, "Kamu dapat menjatuhkan naga dengan sihir api mu!" );

}