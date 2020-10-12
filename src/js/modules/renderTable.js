import state from "./state"
import createTable from "./createTable"


const renderTable = () => {

    const buttonRender = document.querySelector('[data-render="render-table"]')
    const wrapper = document.querySelector('.wrapper')

    buttonRender.addEventListener('click', () => {
        wrapper.innerHTML = ''

        let rowLetters, cellLetters, rowNumbers


        createTable()


        for (let key in state.storageLetters) {
            // console.log(key);
            let itermidiateEl = document.querySelector('[data-idl="' + key + '"]')
            itermidiateEl.style.minWidth = state.storageLetters[key].width + 'px'
            let itermidiateAtr = itermidiateEl.textContent

            for (let i = 0; i <= state.rowNumbers; i++) {
                let dataAtr = 'data-id="' + itermidiateAtr + '' + i + '"'
                let cell = document.querySelector(`[${dataAtr}]`)
                cell.style.minWidth = state.storageLetters[key].width + 'px'
            }
        }
        let rows = document.querySelectorAll('.row');
        let cellNumbers = document.querySelectorAll('.cellNumbers')
        for (let key in state.storageNumbers) {
            cellNumbers[key].style.height = state.storageNumbers[key].height + "px"
            rows[key].children.forEach(item => {


                item.style.height = state.storageNumbers[key].height + "px"
            })
        }
        for (let key in state.intermediateStateValue) {
            let cell = document.querySelector(`[data-id=${key}]`)
            cell.textContent = state.intermediateStateValue[key].value
        }

        for (let key in state.storageFontSize) {
            let cell = document.querySelector(`[data-id=${key}]`)
            cell.style.fontSize = state.storageFontSize[key] + 'px'
        }
        for (let key in state.storageFontColorBackground) {
            // console.log(key);
            let cell = document.querySelector(`[data-id=${key}]`)
            cell.style.background = state.storageFontColorBackground[key]
        }
        for (let key in state.storageTextAlign) {
            let cell = document.querySelector(`[data-id=${key}]`)
            cell.style.justifyContent = state.storageTextAlign[key]
        }
        for (let key in state.storageFontColorText) {
            let cell = document.querySelector(`[data-id=${key}]`)
            cell.style.color = state.storageFontColorText[key]
        }
        for (let key in state.storageFontStyle) {
            let cell = document.querySelector(`[data-id=${key}]`)
            state.storageFontStyle[key].forEach(item => {
                switch (item) {
                    case 'bold':
                        cell.style.fontWeight = item
                        break;
                    case 'italic':
                        cell.style.fontStyle = item
                        break;
                    case 'underline':
                        cell.style.textDecoration = item
                        break;
                }
            })
        }
    })
}

export default renderTable;