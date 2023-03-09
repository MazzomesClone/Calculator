
class Calculator {

    constructor(primaryDisplay, secondaryDisplay, operatorDisplay) {
        this.display = ['', '0']
        this.operator = ''
        this.primaryDisp = primaryDisplay
        this.secondaryDisp = secondaryDisplay
        this.operatorDisp = operatorDisplay
    }

    render() {
        this.primaryDisp.innerText = this.display[1]
        this.secondaryDisp.innerText = this.display[0]
        this.operatorDisp.innerText = this.operator
    }

    shift() {
        this.display.shift()
        this.display.push('')
    }

    backspace() {
        if (this.display[1] === '') return
        this.display[1] = this.display[1].substring(0, this.display[1].length - 1)
        this.render()
    }

    clear() {
        this.display = ['', '0']
        this.operator = ''
        this.render()
    }

    operate() {
        let [num1, num2] = [parseFloat(this.display[0]), parseFloat(this.display[1])]
        let result = 0
        switch (this.operator) {
            case '+':
                result = num1 + num2
                break
            case '-':
                result = num1 - num2
                break
            case 'x':
                result = num1 * num2
                break
            case '÷':
                result = num1 / num2
                break
            default:
                break
        }

        result = result.toString()
        result = result.substring(0, 12)
        result = parseFloat(result)

        // Doesn't round last digit yet
        this.display[1] = result.toString()
    }

    inputNumber(number) {
        if (this.display[1].length+1 > 11) return
        if (this.display[1] === '0' && number !== '.') this.display[1] = ''
        this.display[1] += number
        this.render()
    }

    inputOperator(operator) {
        if (this.operator !== '' && this.display[1] !== '') this.operate()
        this.operator = operator
        if (this.display[1] !== '') this.shift()
        this.render()
    }

    equals() {
        if (this.operator === '' || this.display[1] === '') return
        this.operate()
        this.display[0] = ''
        this.operator = ''
        this.render()
    }

}

/* let c = new Calculator()

c.inputNumber('5')
c.inputNumber('9')

c.inputOperator('+')

c.inputNumber('2')
c.inputNumber('5')

c.inputOperator('-')

c.inputNumber('6')
c.inputNumber('0')

c.equals()

c.inputOperator('+')

c.inputNumber('6')

c.equals()

c.inputOperator('-')

c.inputNumber('5')

c.inputOperator('/')

c.inputNumber('2')

c.equals()

console.log(c.display) */