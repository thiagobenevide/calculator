var listNumbers = []
var expression = []

//Insert number

function insert(number){
    let screen = document.querySelector("#screen").innerHTML

    if (screen.length < 15){
        document.querySelector("#screen").innerHTML = screen + number
    }else if (screen.length >= 15){
        alert("Caixa de número cheia: Apague para adicionar!")
    }
}

//Delete element

function dell(){
    let screen = document.querySelector("#screen").innerHTML

    if (screen.length == ""){
        alert("Caixa de números vazia, não tem o que apagar!")
    }else if(screen.length > 1){
        newScreen = screen.substring(0, screen.length - 1)
        document.querySelector("#screen").textContent = newScreen
    }
}

//Clean all

function clean(){
    let screen = document.querySelector("#screen").innerHTML
    if (screen.length == ""){
        alert("Caixa de números vazia, não tem o que limpar!")
        cleanArrays()
    }else if (screen.length > 0){
        let cleanScreen = ""
        document.querySelector("#screen").textContent = cleanScreen
        cleanArrays()
    }
}

//Calculate operation

function calculate(operation){
    let screen = validatePointer()
    listNumbers.push(screen)
    listNumbers.push(operation)

    let cleanScreen = ""
    document.querySelector("#screen").textContent = cleanScreen

    console.log(listNumbers)

}

//Button equal

function equal(){
    let screen = validatePointer()
    if (screen.length > 0){
        listNumbers.push(screen)    
    }
    
    console.log(listNumbers)
    
    for(let i = 0; i < listNumbers.length; i++){
        expression += listNumbers[i]
    }

    let result = eval(expression)
    let information = resultOperation(result)

    document.querySelector("#screen").innerHTML = information
    cleanArrays()
}

//Result Screen

function resultOperation(result){
    if (result.toString().length < 5){
        return result.toFixed(2)
    }
    return result
}

//Clean Arrays

function cleanArrays(){
    listNumbers = []
    expression = []
}

function validatePointer(){
    let screen = document.querySelector("#screen").innerHTML
    screen = screen.replace(",",".")
    console.log(screen)
    return screen
}