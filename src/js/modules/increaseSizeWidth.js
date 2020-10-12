import state from "./state";
import { ArrayState } from "./arrayState";

const increaseSizeWidth = () => {

    let w_block
    let delta_w = 0; // Изменение по ширине; 
    let new_w
    let attribute
    let letter
    let storageLettersIntermidiate = {}
    /* После загрузки страницы */



    let rowLetters = document.querySelector(".rowLetters"); // Получаем основной блок
    let block_r = rowLetters.querySelectorAll("span"); // Получаем блок для изменения размеров
    let parentBlock;

    let rows


    block_r.forEach(item => item.onmousedown = saveWH); // Ставим обработку на нажатие кнопки мыши

    /* Функция для получения текущих координат курсора мыши */
    function getXY(obj_event) {
        let x
        if (obj_event) {
            x = obj_event.pageX;
        }

        return x
    }

    function saveWH(obj_event) {
        rows = document.querySelectorAll('.row');
        // console.log(obj_event);
        parentBlock = this.parentNode
        attribute = parentBlock.getAttribute('data-idl')
        let point = getXY(obj_event);
        w_block = parentBlock.clientWidth; // Текущая высота блока
        letter = parentBlock.textContent


        delta_w = w_block - point; // Измеряем текущую разницу между высотой и y-координатой мыши
        /* Ставим обработку движения мыши для разных браузеров */
        document.onmousemove = resizeBlock;
        return false; // Отключаем стандартную обработку нажатия мыши
    }



    function resizeBlock(obj_event) {
        let point = getXY(obj_event);

        new_w = delta_w + point; // Изменя  ем новое приращение по высоте
        // console.log(new_w);
        // console.log(parentBlock);
        parentBlock.style.minWidth = new_w + "px" // Устанавливаем новую высоту блока

        rows.forEach(item => {
            item.childNodes[attribute].tagName === 'INPUT' ?
                item.childNodes[attribute].style.minWidth = new_w - 4 + 'px' :
                item.childNodes[attribute].style.minWidth = new_w + 'px'

        })
        state.storageLetters[`${attribute}`] = {
            width: new_w
        }
        storageLettersIntermidiate[`${attribute}`] = {
            width: new_w
        }

    }
    /* При отпускании кнопки мыши отключаем обработку движения курсора мыши */
    rowLetters.addEventListener('mouseup', () => {
        ArrayState.push({
            storageLetters: {
                ...storageLettersIntermidiate
            }
        })
        document.onmousemove = null;
    })

}



export default increaseSizeWidth;