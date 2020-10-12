import createTable from './modules/createTable';
import scrollTable from './modules/scrollTable';
import state from './modules/state';
import clickCell from './modules/clickCell';

import increaseSizeHeight from './modules/increaseSizeHeight';
import increaseSizeWidth from './modules/increaseSizeWidth';
import renderTable from './modules/renderTable';
import cellSelection from './modules/cellSelection';
import clickOnButtonAll from './modules/clickOnButtonAll';
import tableEditingFontStyle from './modules/tableEditingFontStyle';
import tableEditingFontSize from './modules/tableEditingFontSize';
import backgroundColor from './modules/BackgroundColor';
import textAlignStyle from './modules/textAlignStyle';
import textColor from './modules/TextColor';



window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    createTable();  // функция создающая таблицу
    // renderTable();
    scrollTable();  // функция увеличивающая таблицу при скроллинге
    increaseSizeHeight(); // увеличение высоты ячеек 
    increaseSizeWidth();  // увеличение ширины ячеек
    clickCell();       // обработка нажатия по ячейкам и замена их на инпуты и обратно
    cellSelection()
    clickOnButtonAll()
    tableEditingFontStyle()
    tableEditingFontSize()
    backgroundColor()
    textAlignStyle()
    textColor()
    console.log(state);
    
     
});
