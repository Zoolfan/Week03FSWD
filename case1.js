let suhu = function (derajat) {
  if (derajat >= -100 && derajat <= 0) {
    return "beku";
  } else if (derajat >= 1 && derajat <= 100) {
    return "cair";
  } else if (derajat >= 101 && derajat <= 500) {
    return "uap";
  } else {
    return "tidak terdefinisi";
  }
};
let air = suhu(100);
console.log(air);
