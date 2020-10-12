import state from "./state"
import {
    ArrayState
} from "./arrayState"

const backgroundColor = () => {
    const inputColor = document.querySelector('.input-color-background')


    let storageFontColorIntermidiate = {}
    inputColor.addEventListener('input', () => {
        const selectCell = document.querySelectorAll('.selectCell')
        const edit = document.querySelector('.edit')
        if (selectCell) {
            selectCell.forEach(item => {
                let atr = item.getAttribute('data-id')

                item.style.background = inputColor.value

                state.storageFontColorBackground[atr] = inputColor.value

                storageFontColorIntermidiate[atr] = inputColor.value
            })  
        }
        if (edit) {
            edit.style.background = inputColor.value
            let atr = edit.getAttribute('data-id')
            state.storageFontColorBackground[atr] = inputColor.value

            storageFontColorIntermidiate[atr] = inputColor.value

        }

    })

    inputColor.onblur = () => {

        ArrayState.push({
            storageFontColorBackground: {
                ...storageFontColorIntermidiate
            }
        })
    }

}
export default backgroundColor;