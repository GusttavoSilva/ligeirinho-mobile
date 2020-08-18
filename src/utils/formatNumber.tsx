export function DataAtual() {
  var now = new Date();
  // var dia = now.getDay();
  // var mes = now.getMonth();
  var ano = now.getFullYear();

  if (now.getDay() < 10) {
    var dia = '0' + now.getDay();
  }
  if (now.getMonth() < 10) {
    var mes = '0' + now.getMonth();
  }

  return dia + '/' + mes + '/' + now.getFullYear();
}
