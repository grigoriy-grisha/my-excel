import state from "./state"
import inputFunctionValue from "./functions/inputFunctionValue"
import mathFunctions from "./functions/mathFunctions"
import {
    ArrayState
} from "./arrayState"



function clickCell() {
    const wrapper = document.querySelector('.wrapper')
    const cells = document.querySelectorAll('.cell')
    let attribute, attributeNumber, result;
    let intermediateStateValue = {}
    wrapper.addEventListener('click', (e) => {
        // console.log(cells);


        e.preventDefault()
        let target = e.target

        if (!target.classList.contains('cell')) return;
        let height = target.clientHeight
        let width = target.clientWidth
        attribute = target.getAttribute('data-id')
        attributeNumber = target.getAttribute('data-number')
        let area = null;


        area = document.createElement('input');
        area.style.minWidth = width - 4 + 'px'
        area.style.height = height - 2 + 'px'
        area.style.borderColor = '#004A8B'
        area.setAttribute('data-id', `${attribute}`)
        area.setAttribute('data-number', `${attributeNumber}`)
        area.className = 'edit';
        area.value = target.innerHTML;
        inputFunctionValue(target.innerHTML)


        area.onkeydown = function (event) {
            if (event.key == 'Enter') {
                this.blur();
            }
        };



        area.onblur = function () {
            area.blur()
            editEnd();
        };

        target.replaceWith(area);
        area.focus();

        cells.forEach(item => {
            item.classList.remove('edit')
        })

        area.addEventListener('input', () => {

            inputFunctionValue(area.value)

            if (area.value[0] === '=') {
                result = mathFunctions(area.value)
            }

        })

        function editEnd() {

            state.intermediateStateValue[attribute] = {
                value: area.value,
            }
            intermediateStateValue[attribute] = {
                value: area.value,
            }
            ArrayState.push({intermediateStateValue: {...intermediateStateValue}})
            target.style.height = area.clientHeight + 'px'
            target.style.minWidth = area.clientWidth + 'px'
            result ? target.innerHTML = result : target.innerHTML = area.value

            target.classList.add('edit')
            area.replaceWith(target);
            // document.onmousemove = null
            result = null
        }
    })
}

export default clickCell;