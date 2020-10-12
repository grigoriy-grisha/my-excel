import state from "./state";
import {
  ArrayState
} from "./arrayState";

const increaseSizeHeight = () => {

  let h_block
  let delta_h = 0; // Изменение по высоте
  let new_h
  let attribute
  let IDATR;
  let storageNumbersIntermidiate = {};



  let rowNumbers = document.querySelector(".rowNumbers"); // Получаем основной блок
  let block_r = rowNumbers.querySelectorAll("span"); // Получаем блок для изменения размеров
  let parentBlock;

  let rows = document.querySelectorAll('.row');



  // Ставим обработку на отпускание кнопки мыши
  block_r.forEach(item => item.onmousedown = saveWH); // Ставим обработку на нажатие кнопки мыши

  /* Функция для получения текущих координат курсора мыши */
  function getXY(obj_event) {
    let y
    if (obj_event) {
      y = obj_event.pageY;
    }

    return y
  }

  function saveWH(obj_event) {
    // console.log(obj_event);
    parentBlock = this.parentNode
    attribute = parentBlock.getAttribute('data-id')
    var point = getXY(obj_event);

    h_block = parentBlock.clientHeight; // Текущая высота блока

    delta_h = h_block - point; // Измеряем текущую разницу между высотой и y-координатой мыши
    /* Ставим обработку движения мыши для разных браузеров */
    document.onmousemove = resizeBlock;
    return false; // Отключаем стандартную обработку нажатия мыши
  }

  /* Функция для измерения высоты окна */
  /* При отпускании кнопки мыши отключаем обработку движения курсора мыши */


  function resizeBlock(obj_event) {
    var point = getXY(obj_event);

    new_h = delta_h + point; // Изменяем новое приращение по высоте

    parentBlock.style.height = new_h + "px" // Устанавливаем новую высоту блока

    rows[attribute].children.forEach(item => {

      item.tagName === 'INPUT' ?
        item.style.height = new_h - 2 + "px" :
        item.style.height = new_h + "px"
      IDATR = item.getAttribute('data-id')
    })
    // console.log(attribute);
    state.storageNumbers[attribute] = {
      height: new_h
    }
    storageNumbersIntermidiate[attribute] = {
      height: new_h
    }

  }

  rowNumbers.addEventListener('mouseup', () => {
    ArrayState.push({
      storageNumbers: {
        ...storageNumbersIntermidiate
      }
    })
    document.onmousemove = null;
  }) 


}
export default increaseSizeHeight;