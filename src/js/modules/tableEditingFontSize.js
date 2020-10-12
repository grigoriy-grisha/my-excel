import state from "./state";
import { ArrayState } from "./arrayState";
const tableEditingFontSize = () => {
    const selectForSize = document.querySelector('.size-font')
    
    let selected
    let storageFontSizeIntermidiate = {}
    selectForSize.addEventListener('input', () => {
        const selectCell = document.querySelectorAll('.selectCell')

        selectForSize.forEach(item => {
            if (item.selected) {
                selected = +item.value
            }
        });

        if (selectCell) {
            // console.log('asdas');

            if (selected == 16) {
                selectCell.forEach(item => {
                    item.style.fontSize = selected + 'px'
                })

            } else {
                selectCell.forEach(item => {
                    let atr = item.getAttribute('data-id')
                    item.style.fontSize = selected + 'px'
                    state.storageFontSize[atr] = selected

                    storageFontSizeIntermidiate[atr] = selected
                })

            }
            ArrayState.push({
                storageFontSize: {...storageFontSizeIntermidiate}
            })

        }

    })


}

export default tableEditingFontSize;