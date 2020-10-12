import state from "./state"
import { ArrayState } from "./arrayState"

const textAlignStyle = () => {
    const textAlign = document.querySelector('.align-style')

    let storageTextAlignIntermidiate = {}
    textAlign.addEventListener('click', (e) => {
        const selectCell = document.querySelectorAll('.selectCell')
        const edit = document.querySelector('.edit')
        let target = e.target
        let atribute = target.getAttribute('data-style')
        // console.log(atribute);

        if(!target.closest('.align-text')) return;

        if (selectCell) {
            selectCell.forEach(item => {
                let atr = item.getAttribute('data-id')

                item.style.justifyContent = atribute

                state.storageTextAlign[atr] = atribute

                storageTextAlignIntermidiate[atr] = atribute
            })
        }
        if (edit) {
            edit.style.textAlign = atribute

            let atr = edit.getAttribute('data-id')

            state.storageTextAlign[atr] = atribute

            storageTextAlignIntermidiate[atr] = atribute
        }

        ArrayState.push({
            storageTextAlign: {
                ...storageTextAlignIntermidiate
            }
        })

    })
}

export default textAlignStyle;