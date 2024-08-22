const resultBtn = document.getElementById('result')
const deleteBtn = document.getElementById('delete')
const minusNumberBtn = document.getElementById('minusNumber')
const procentBtn = document.getElementById('procent')
const delBtn = document.getElementById('del')
const ymnoBtn = document.getElementById('ymno')
const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
const ravnoBtn = document.getElementById('ravno')
const commaBtn = document.getElementById('comma')
const numberButtons = document.querySelectorAll(".number, .numberZero")
let input1 = []
let input2 = []
let resultString = []
let action = '?'
let actionLast

delBtn.onclick = function (){
    action = "/"
    actionLast = action
}
ymnoBtn.onclick = function (){
    action = "*"
    actionLast = action
}
minusBtn.onclick = function (){
    action = "-"
    actionLast = action
}
plusBtn.onclick = function (){
    action = "+"
    actionLast = action
}
function actionButton(action){
    if (action !== "?"){
        resultString = input2
    } else{
        resultString = input1
    } 
}
function znack(action){
    if (action == "+"){
        resultString=Number(input1.join(''))+Number(input2.join(''))
    }
    else if (action == "-"){
        resultString=Number(input1.join(''))-Number(input2.join(''))
    }
    else if (action == "*"){
        resultString=Number(input1.join(''))*Number(input2.join(''))
    }
    else if (action == "/"){
        resultString=Number(input1.join(''))/Number(input2.join(''))
    }
}
minusNumberBtn.onclick = function(){
    if (typeof resultString === 'number'){
        resultString = resultString.toString().split('')
        action = '?'
        actionButton(action)
    }
    resultString.unshift('-')
    if(resultString[0] && resultString[1] == '-'){
        resultString.shift()
        resultString.shift()
    }
    resultBtn.textContent = resultString.join('')
    actionButton(action)
}
procentBtn.onclick = function(){
    if (typeof resultString === 'number'){
        resultString = resultString / 100
    } else{
        resultString = Number(resultString.join(''))/100
    }
    resultString = resultString.toString().split('')
    resultBtn.textContent = resultString.join('')
    actionButton(action)
}

function input (value) {
    actionButton(action)
    resultString.push(value)
    resultBtn.textContent = resultString.join('')
}
deleteBtn.onclick = function clear () {
        input1 = []
        input2 = []
        resultString = ['0']
        action = "?"
        resultBtn.textContent = 0
}

numberButtons.forEach(button =>{
    button.onclick = function() {
        input(button.textContent)
    }
})
ravnoBtn.onclick = function(){
    if (input2.length == 0){
        return
    }
    if (action = '?'){
        action = actionLast
        znack(action)
    }
    znack(action)
    if(typeof resultString == 'number'){
        input1=resultString.toString().split('')
    }
    resultBtn.textContent = resultString
}