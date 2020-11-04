// no side effects
// input --> output

function a(num1, num2) {
  return num1 + num2;
}

a(3, 4); // This always returns 7; REFERENTIAL TRANSPARENCY

function b(num) {
  return b * 2;
}

b(a(3, 4)); // returns 14, same as b(7)