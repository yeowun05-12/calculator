const numbers = document.querySelectorAll('.number');
const func = document.querySelectorAll('.function');
const opera = document.querySelectorAll('.operator');
const display = document.querySelector('.num_view');
const point = document.querySelector('.point');
const result = document.querySelector('.result');
// 변수 선언
let firstOperand = null;
let secondOperand = null;
let operator = null;
let reset = false;

// 숫자를 눌렀을 떄 디스플레이에 노출
numbers.forEach((num) => {
  num.addEventListener('click', (e) => {
    if (display.textContent === '0' || reset) {
      display.textContent = e.target.textContent;
      reset = false;
      return;
    }
    display.textContent += e.target.textContent;
  });
});

// 연산기호를 눌렀을 때 display의 내용을 저장하고 연산기호도 저장
opera.forEach((op) => {
  op.addEventListener('click', (e) => {
    if (firstOperand !== null && !reset) {
      secondOperand = display.textContent;
      calculate(); // 중간 계산 수행
      firstOperand = display.textContent; // 결과를 firstOperand로 업데이트
    } else {
      firstOperand = display.textContent;
    }
    operator = e.target.textContent;
    console.log(`firstOperand : ${firstOperand}`);
    console.log(`operator : ${operator}`);
    reset = true;
  });
});

// =를 눌렀을 때 secondOperand를 입력 받고 결과값이 나오게 반환
result.addEventListener('click', (e) => {
  if (firstOperand !== null && operator !== null) {
    secondOperand = display.textContent;
    calculate();
    firstOperand = display.textContent; // 결과를 다음 연산에 활용
    operator = null; // 연산자 초기화
    reset = true; // 새 입력 시 디스플레이 초기화
    console.log(`Calculation complete: ${display.textContent}`);
  }
});

// 계산 함수식
function calculate() {
  let num1 = Number(firstOperand);
  let num2 = Number(secondOperand);

  if (operator === '+') {
    display.textContent = num1 + num2;
  } else if (operator === '-') {
    display.textContent = num1 - num2;
  } else if (operator === '*') {
    display.textContent = num1 * num2;
  } else if (operator === '/') {
    display.textContent = num1 / num2;
  }
  return;
}

// 상황 정리 필요,
// c나 = 을 누르면 해야한다 지워지고 새로 숫자를 쓰는 상황은 어떤 상황인지 생각을 해보고 대입할 것

// C 눌렀을 때 클리어
func[0].addEventListener('click', (e) => {
  display.innerHTML = '';
  display.textContent = '0';
  firstOperand = null;
});

// 소수점 클릭 시 작동 로직
//includes 배열에서도 사용이 가능하다고 합니다. >  배열에 특정값이 있는지 확인 가능

point.addEventListener('click', (e) => {
  if (!display.textContent.includes('.')) {
    display.textContent += e.target.textContent;
  }
});

//디스플레이에 숫자 입력 후 연산기호 기억하기

/*
func.forEach((func) => {
  func.addEventListener('click', (e) => {
    console.log(e.target.textContent);
  });
});
*/
