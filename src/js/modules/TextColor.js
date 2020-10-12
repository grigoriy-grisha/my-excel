import state from "./state"
import { ArrayState } from "./arrayState"

const textColor = () => {

    const inputColor = document.querySelector('.input-color-text')

    let storageFontColorIntermidiate = {}
    inputColor.addEventListener('input', () => {
        const selectCell = document.querySelectorAll('.selectCell')
        const edit = document.querySelector('.edit')
        if (selectCell) {
            selectCell.forEach(item => {
                let atr = item.getAttribute('data-id')

                item.style.color = inputColor.value

                state.storageFontColorText[atr] = inputColor.value

                storageFontColorIntermidiate[atr] = inputColor.value
            })
        }
        if (edit) {
            edit.style.color = inputColor.value
            let atr = edit.getAttribute('data-id')
            state.storageFontColorText[atr] = inputColor.value

            storageFontColorIntermidiate[atr] = inputColor.value

        }

    })

    inputColor.onblur = () => {

        ArrayState.push({
            storageFontColorText: {
                ...storageFontColorIntermidiate
            }
        })
    }
}

export default textColor;