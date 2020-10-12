const mathFunctions = (value) => {
    let operators = ['+', '-', '*', "/"]
    let operator
    let indexOper
    let numberOne
    let numberTwo
    let convertStr = value.split('')
    convertStr.splice(0, 1)
    // convertStr.join('')
    console.log(convertStr);
    operators.forEach((elem) => {
        if (convertStr.join('').includes(elem)) {
            operator = elem
        }
    })
    convertStr.forEach((item, index) => {
        if (item === operator) {
            // console.log(item);
            indexOper = index
        }
    })
    numberOne = convertStr.slice(0, indexOper)
    numberTwo = convertStr.slice(indexOper + 1, convertStr.lenght)

    numberOne = +numberOne.join('')
    numberTwo = +numberTwo.join('')

    if (numberOne && numberTwo && operator) {
        let methods = {
            "-": (a, b) => a - b,
            "+": (a, b) => a + b,
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
        };

        return methods[operator](numberOne, numberTwo);
    }



}

export default mathFunctions;