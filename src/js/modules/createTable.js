import state from "./state";  // глобальный стайт в нем нажодятся данные о таблице

const createTable = () => {
    

    let rowLetters, cellLetters, rowNumbers, cellNumbers;    // объявление переменных
    let wrapper = document.querySelector('.wrapper')         // получаем обертку таблицы


    rowLetters = document.createElement('div');
    rowLetters.classList.add('rowLetters');                 // создаем линию с буквами какждой букве даем индивидуальный дата атрибут
                                                            // в каждую ячейку кладем спан для управления шириной ячейки и колонки
    // console.log(state.items);
    for (let i = 0; i < state.items.length; i++) {           
        
        let span = document.createElement('span')
        //     state.items.push(state.nextItem++);
        cellLetters = document.createElement('div');
        cellLetters.classList.add('cellLetters')            
        cellLetters.setAttribute('data-idl', `${i}`)
        cellLetters.textContent = state.items[i]
        cellLetters.appendChild(span)
        rowLetters.appendChild(cellLetters);    
    }                                                       //
    wrapper.appendChild(rowLetters);

    rowNumbers = document.createElement('div');             // создаем линию с числами
                                                            // даем каждой ячейке индивидуальны дата атрибус
                                                            // в каждую ячейку кладем спан для управления высотой ячейки и ряда
    rowNumbers.classList.add('rowNumbers');
    for (let i = 0; i <= state.rowNumbers; i++) {

        let span = document.createElement('span')
        //     state.items.push(state.nextItem++);

        cellNumbers = document.createElement('div');
        cellNumbers.setAttribute('data-id', `${i}`)
        cellNumbers.classList.add('cellNumbers')
        cellNumbers.textContent = i
        cellNumbers.appendChild(span)
        rowNumbers.appendChild(cellNumbers);
    }   
    //создаем кнопку для выделения всех ячеек
    let buttonAll = `                                       
                        <button class="button-all">
                        <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                            <path d="m464 512h-416c-26.476562 0-48-21.546875-48-48v-416c0-26.453125 21.523438-48 48-48h416c26.476562 0 48 21.546875 48 48v416c0 26.453125-21.523438 48-48 48zm-416-480c-8.832031 0-16 7.1875-16 16v416c0 8.8125 7.167969 16 16 16h416c8.832031 0 16-7.1875 16-16v-416c0-8.8125-7.167969-16-16-16zm0 0" />
                            <path d="m496 272h-480c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h480c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" /><path d="m256 512c-8.832031 0-16-7.167969-16-16v-480c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v480c0 8.832031-7.167969 16-16 16zm0 0" />
                        </svg>
                        </button>`;
    rowNumbers.insertAdjacentHTML('afterbegin', buttonAll)
    wrapper.appendChild(rowNumbers);

    for (let i = 0; i <= state.rowNumbers; i++) {                     // создаем ячейки основываяюсь на количестве букв и чисел 
                                                                        // каждой ячейке даем индивидуальный дата атрибут с буквой и числом
        let row = document.createElement('div');
        row.setAttribute('data-number',i)
        row.classList.add('row');
        for (let j = 0; j < state.items.length; j++) {
            let cell = document.createElement('div');
            cell.setAttribute('data-id', `${state.items[j]}${i}`)
            cell.setAttribute('data-number', j)
            cell.classList.add('cell')
            cell.textContent = ''
            row.appendChild(cell);
        }
        wrapper.appendChild(row);
    }
    
}

export default createTable;