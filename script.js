document.addEventListener('DOMContentLoaded', function() {

    const operators = document.getElementById('operators')
    const countButton = document.getElementById('equals')
    const result = document.getElementById('result')
    const resultContainer = document.querySelector('.result_container')

    function calculator() {    
        const firstNumber = Number(document.getElementById('firstNum').value)
        const secondNumber = Number(document.getElementById('secondNum').value)

        if(isNaN(firstNumber) === true || isNaN(secondNumber) === true) {
            alert('Ошибка значения! Введите число')

        } else {
            let finalResult

            switch(operators.value) {
                case '+':
                    finalResult = result.textContent = firstNumber + secondNumber
                    break
                case '-':
                    finalResult = result.textContent = firstNumber - secondNumber
                    break
                case '*':
                    finalResult = result.textContent = firstNumber * secondNumber
                    break
                case '/':
                    finalResult = result.textContent = firstNumber / secondNumber
                    break
            }

            createElement(finalResult)
        }
    }

    function createElement(res) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('result_item')
        newDiv.textContent = res
        resultContainer.appendChild(newDiv)
    }

    function deleteElement() {
        event.target.remove()
    }

    countButton.addEventListener('click', calculator)
    resultContainer.addEventListener('click', deleteElement)
});




