import state from "../state";
import increaseSizeHeight from "../increaseSizeHeight";
import cellSelection from "../cellSelection";
import clickOnButtonAll from "../clickOnButtonAll";
import { ArrayState } from "../arrayState";


function updateTableVert() {
    const wrapper = document.querySelector('.wrapper')
    state.rowNumbers++                                         // увеличение значеня которае хранит количество ячеек-чисел

    let rowNumbers = document.querySelector('.rowNumbers');

    let cellNumbers = document.createElement('div');          // создание ячейки числа 

    let span = document.createElement('span')


    cellNumbers.classList.add('cellNumbers')                    
    cellNumbers.setAttribute('data-id', `${state.rowNumbers}`)
    cellNumbers.textContent = state.rowNumbers
    cellNumbers.appendChild(span)
   


    rowNumbers.appendChild(cellNumbers);
    let row = document.createElement('div');    
    row.setAttribute('data-number', state.rowNumbers)               // создание линии
    row.classList.add('row');
      
    for (let i = 0; i < state.items.length; i++) {             // создание ячеек и присваивание им инивидуального дата атрибута 
        let cell = document.createElement('div');
        cell.setAttribute('data-id', `${state.items[i]}${state.rowNumbers}`)
        cell.setAttribute('data-number', i)
        cell.classList.add('cell')
        cell.textContent = ''
        row.appendChild(cell);
    }
    wrapper.appendChild(row);

    increaseSizeHeight();
    cellSelection()
    clickOnButtonAll()     // добавление обработчика при появлении новых ячеек

    ArrayState.push({rowNumbers: state.rowNumbers})
}

export default updateTableVert;