import state from "../state";

const increaseSizeForScroll = () => {
    let storage = state.storageLetters
    for (let key in storage) {
        let itermidiateAtr = document.querySelector('[data-idl="'+ key +'"]').textContent
        console.log(itermidiateAtr);
        let dataAtr = 'data-id="' + itermidiateAtr + '' + state.rowNumbers + '"'
        let cell = document.querySelector(`[${dataAtr}]`)
        cell.style.minWidth = storage[key].width + 'px'
    }
}

export default increaseSizeForScroll;