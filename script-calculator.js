var listNumbers = []
var expression = []


function insert(number){
    let screen = document.querySelector("#screen").innerHTML

    if (screen.length < 15){
        document.querySelector("#screen").innerHTML = screen + number
    }else if (screen.length >= 15){
        alert("Caixa de número cheia: Apague para adicionar!")
    }
}

function dell(){
    let screen = document.querySelector("#screen").innerHTML

    if (screen.length == ""){
        alert("Caixa de números vazia, não tem o que apagar!")
    }else if(screen.length > 1){
        newScreen = screen.substring(0, screen.length - 1)
        document.querySelector("#screen").textContent = newScreen
    }
}

function clean(){
    let screen = document.querySelector("#screen").innerHTML
    if (screen.length == ""){
        alert("Caixa de números vazia, não tem o que limpar!")
        listNumbers = []
        expression = []
    }else if (screen.length > 0){
        let cleanScreen = ""
        document.querySelector("#screen").textContent = cleanScreen
        listNumbers = []
        expression = []
    }
}

function calculate(operation){
    let screen = document.querySelector("#screen").innerHTML   
    listNumbers.push(screen)
    listNumbers.push(operation)
    
    let cleanScreen = ""
    document.querySelector("#screen").textContent = cleanScreen

    console.log(listNumbers)

}

function equal(){
    listNumbers.pop()
    
    for(let i = 0; i < listNumbers.length; i++){
        expression += listNumbers[i]
    }

    let result = eval(expression)
    document.querySelector("#screen").innerHTML = result
    listNumbers = []
    expression = []
}