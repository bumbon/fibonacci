
var n = Number(prompt('Задайте зачення для знаходження числа Фібоначчі:'));
document.write('Для n = ', n);

function fib() {
  var a = 1, b = 1; //
  for (var i = 3; i <= n; i++) { // починаєм з 3, бо перші два числа Фіб. наперед записані в "a" і "b"
    var c = a + b; 
        a = b;     
        b = c;     
  }
  return b; 
}
if (isNaN(n)) {
  document.write(' Введене значення не є числом ');
} else {
  document.write(' число Фібоначчі F = ', fib());
}

