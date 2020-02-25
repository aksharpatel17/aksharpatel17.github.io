window.onload = ()=>{

  const numbers = document.querySelectorAll('.number')

  const cal_screen = document.querySelector('.cal_screen')

  const updateScreen = () => {
    cal_screen.value = currentInput;
  }

  numbers.forEach((number) => {
    number.addEventListener('click',(event) => {
      inputNumber(event.target.value)
      updateScreen();

    })
  });

  let prevInput = '0'
  let calculationOperator = ''
  let currentInput = '0'

  const inputNumber = (number)=>{
    if(currentInput === '0'){
      currentInput = number;
      console.log(currentInput);

    }
    else{
      currentInput += number;
      console.log(currentInput);
    }
  }

  const operators = document.querySelectorAll('.operator')

  operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

  const inputOperator = (operator)=>{
    prevInput=currentInput
    calculationOperator=operator
    currentInput='0'
    console.log("In input operator");
  }

  const equalSign = document.querySelector('.equal-sign')
  const calculate = () =>{
      let result = 0
      console.log(calculationOperator);
      switch(calculationOperator) {
          case '+':
              result = parseInt(prevInput) + parseInt(currentInput)
              break
          case '*':
              result = parseInt(prevInput) * parseInt(currentInput)
              break
          case '-':
              result = parseInt(prevInput) - parseInt(currentInput)
              break
          case '/':
              result = parseInt(prevInput) / parseInt(currentInput)
              break
          default: return
      }
      currentInput = result.toString();
      console.log(currentInput);
      calculationOperator = ''
  }

  equalSign.addEventListener('click',() => {
      calculate()
      updateScreen()
  })

  //calculation



  //AC

  const clearBtn = document.querySelector('.all-clear')

  clearBtn.addEventListener('click', () => {
      clearAll()
      updateScreen(currentInput)
  })

  const clearAll = () => {
       prevInput = '0'
       calculationOperator = ''
       currentInput = '0'
  }


  document.addEventListener('keydown',(event) =>{
    let key = event.key
    if(Number(key)>=0 || Number(key)<=9){
    inputNumber(key)
    updateScreen()
  }
    if(key == "+" || key == "-" || key == "*" || key == "/")
    {
      inputOperator(key)
    }
    if(key == 'Enter'){
calculate();
updateScreen()
    }


  })



}
