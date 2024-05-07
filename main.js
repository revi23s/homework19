prompt("Adınızı daxil edin");
prompt("Soyadınızı daxil edin");
let age = +prompt("Yaşınızı daxil edin");

if (age < 18) {
  alert("qeydiyyat keçmək üçün yaşınız azdır");
} else if (age > 18) {
  alert("qeyidyyat üçün yaşınız çoxdur");
} else {
  alert("qeydiyyat uğurla tamamlandı");
}
