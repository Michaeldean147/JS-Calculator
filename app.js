var buttons = document.getElementsByClassName('button')
var operators = ["+","-","/","*"]
var integers = ["0","1","2","3","4","5","6","7","8","9"]
var output = document.getElementById("result_display_value")

var calculation = ""


function checkOutputForIntegers(){
  for ( i = 0; i < integers.length; i++ ){
    if(output.innerHTML === integers[i]){
      calculation += output.innerHTML
    }
  }
}
function checkOutputForOperators(){
  for ( i = 0; i < operators.length; i++ ){
    if(output.innerHTML === operators[i]){
      calculation += output.innerHTML
    }
  }
}


for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    output.innerHTML = this.innerHTML
    checkOutputForIntegers()
    checkOutputForOperators()
    if(output.innerHTML === "ENT"){
      output.innerHTML = (eval(calculation))
    }
    if(output.innerHTML === "CLR"){
      calculation = ""
    }

  });
}
