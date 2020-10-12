import state from "./state"
import { ArrayState } from "./arrayState"

const tableEditingFontStyle = () => {
    const editingFont = document.querySelector('.table-editing-font')

    let arraySetStyles = new Set([])
    let storageFontStyleIntermidiate = {}
    let arrayFontStyleIntermidiate = []
    editingFont.addEventListener('click', (e) => {
        
        let selectCell = document.querySelectorAll('.selectCell')
        let edit = document.querySelector('.edit')
        
        let target = e.target
        let dataStyle = target.getAttribute('data-style')
        let dataValue = target.getAttribute('data-value')

        if (!target.closest('.font')) return
        // console.log(dataStyle);
        // console.log(dataValue);
        if (selectCell) {
            if (target.checked) {
                arraySetStyles.add(dataValue)
                selectCell.forEach(item => {
                    let atr = item.getAttribute('data-id')
                    console.log(atr);
                    item.style[dataStyle] = dataValue

                    state.storageFontStyle[atr] = [...arraySetStyles]
                    arrayFontStyleIntermidiate = [...arraySetStyles]
                    storageFontStyleIntermidiate[atr] = arrayFontStyleIntermidiate
                })
                
                
            } else {
                arraySetStyles.delete(dataValue)
                selectCell.forEach(item => {
                    let atr = item.getAttribute('data-id')
                    item.style[dataStyle] = ''

                    state.storageFontStyle[atr] = [...arraySetStyles]
                    arrayFontStyleIntermidiate = [...arraySetStyles]
                    storageFontStyleIntermidiate[atr] = arrayFontStyleIntermidiate
                })
               
            }
            // console.log(arraySetStyles);
            ArrayState.push({storageFontStyle: {
                ...storageFontStyleIntermidiate
            }}) 
            // console.log(ArrayState);
        }
        if (edit) {
            if (target.checked) {
                let atr = edit.getAttribute('data-id')
                edit.style[dataStyle] = dataValue
                state.storageFontStyle[atr] = [...arraySetStyles]
                arrayFontStyleIntermidiate = [...arraySetStyles]
                storageFontStyleIntermidiate[atr] = arrayFontStyleIntermidiate

                

            } else {
                let atr = edit.getAttribute('data-id')
                edit.style[dataStyle] = ''
                state.storageFontStyle[atr] = [...arraySetStyles]
                arrayFontStyleIntermidiate = [...arraySetStyles]
                storageFontStyleIntermidiate[atr] = arrayFontStyleIntermidiate

                
            }
            // console.log(arraySetStyles);
            ArrayState.push({storageFontStyle: {
                ...storageFontStyleIntermidiate
            }}) 
           
        }
      
    })
}

export default tableEditingFontStyle;