let num = 42
let firstName = "Denis"
const isProgrammer = true
alert
// isProgrammer = false
const enter = document.getElementById('result')
// console.log(enter.textContent)
// enter.textContent=(42-2)*num
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = "+"
// console.log(typeof sum)

plusBtn.onclick = function () {
    action = "+"
}

minusBtn.onclick = function () {
    action = "-"
}

function printEnter(result){
    if (result<0) {
        enter.style.color = "red"
    } else{
        enter.style.color = "green"
    }
    enter.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    // if (actionSymbol == "+"){
    //     return num1 + num2
    // } else if (actionSymbol == "-"){
    //     return num1 - num2
    // }
    return actionSymbol == "+" ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printEnter(result)
    // if (action == "+"){
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printEnter(sum)
    // } else if (action == "-"){
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printEnter(sum)
    // }
}