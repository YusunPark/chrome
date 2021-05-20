// 2.0 Your first JS Function

const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true
};

// console 은 nicoinfo 보다 더 큰 오브젝트
// log는 function같은 것이다 -> 내장함수
console.log(nicoInfo.age); 


// 함수에 인자를 전달하기
function sayHello(name, age) {
  console.log(name,'Hello!');
  console.log("your age is", age);
}
sayHello("yusun", 15);

console.log("--------------------------------------------")

// 2.1 More Function Fun


// 백틱 사용하기 ``
function sayHello2(name, age) {
  return `Hello ${name} you are ${age} years old`;
}
sayHello2("yusun", 15); //<- return으로 바꾸어서 이렇게만 하면 아무것도 안나온다.


// 변수 이용하기
// 이때 greetNicolas에 값을 넣어주기 위해서 sayHello2에서 값을 리턴 해준다.
const greetNicolas = sayHello2("Nicolas", 14)
console.log(greetNicolas)


// 객체만들기
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiple: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  }
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multiple = calculator.multiple(5, 5);
const divide = calculator.divide(5, 5);
console.log(plus);
console.log(minus);
console.log(multiple);
console.log(divide);
