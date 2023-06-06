let detail = function (jenis, warnaPlat, cc) {
  if (jenis == "motor" || warnaPlat == "kuning") {
    return "BBM Subsidi";
  } else if (jenis == "mobil" && cc < 1500 && warnaPlat != "kuning") {
    return "BBM Pertamax";
  } else if (jenis == "mobil" && cc >= 1500 && warnaPlat != "kuning") {
    return "BBM Pertamax Turbo";
  } else {
    return "Coba Lagi";
  }
};

let kendaraan = detail("mobil", "kuning", "1500");

console.log(kendaraan);
