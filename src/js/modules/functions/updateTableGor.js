import state from "../state";
import increaseSizeWidth from "../increaseSizeWidth";
import cellSelection from "../cellSelection";
import clickOnButtonAll from "../clickOnButtonAll";
import { ArrayState } from "../arrayState";



function updateTableGor() {
    
    state.rowLetters++                                          // увеличение стейтого значения о количестке ячеек с буквами
    const rowLetters = document.querySelector('.rowLetters');
    const row = document.querySelectorAll('.row');

    if (state.counter == 26) {   // если сщетчик превышает количество букв то он обнуляеся и счетчик идет заново и создает новые ячейки aa ab ac ...
        state.counter = 0;
        state.replay++
    }
    state.items.push(state.items[state.replay] + state.items[state.counter])   //
  
    
    let span = document.createElement('span')                      // создание ячейки с буквой и присваивание ей индивидуального дата атрибта


    let cellLetters = document.createElement('div');

    cellLetters.classList.add('cellLetters')
    cellLetters.setAttribute('data-idl', `${state.rowLetters}`)
    cellLetters.textContent = state.items[state.items.length - 1]
    cellLetters.appendChild(span)
    rowLetters.appendChild(cellLetters);

    row.forEach((item, index) => {            // добавление новых ячеек и прсваивание им индивиддуальных дата атрибутов

        let cell = document.createElement('div');
        cell.setAttribute('data-id', `${state.items[state.items.length - 1]}${index}`)
        cell.setAttribute('data-number',  state.rowLetters)
        cell.classList.add('cell')
        cell.textContent = ''   

        item.appendChild(cell)
    })
    
    state.counter++
    increaseSizeWidth()
    cellSelection() 
    clickOnButtonAll()   // при появлении новых ячеек добавление обработчика для изменения ширины ячеек
    
    ArrayState.push({rowLetters: state.rowLetters})
}

export default updateTableGor;