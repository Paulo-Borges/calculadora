const body = document.querySelector('body')
const equal = document.querySelector('.equal')

// function handleClick() {
//     body.classList.toggle('fundoBlack')
// }

//     equal.addEventListener('click', handleClick)


    equal.addEventListener("click", function() {
    body.classList.toggle('fundoBlack')

    })


function adicionarCaracter(num) {
    const valorDisplay = document.querySelector('.display').value
    
    document.querySelector(".display").value = valorDisplay + num
}

function limpaTela() {
    document.querySelector(".display").value = ""

}


function calcular() {
    const valorDisplay = document.querySelector('.display').value

    document.querySelector(".display").value = eval(valorDisplay)
}


function inverterNumero() {
    const valorDisplay = document.querySelector('.display').value

    document.querySelector(".display").value = valorDisplay * -1
}

