
import updateTableVert from "./functions/updateTableVert";
import updateTableGor from "./functions/updateTableGor";
import increaseSizeForScroll from "./functions/increaseSizeForScroll";



const scrollTable = () => {
    const html = document.documentElement
    // функция которая при скроллинге увеличивает размеры таблицы
    window.addEventListener('scroll', () => {

        let scrollRight = html.scrollLeft + html.clientWidth; // скролл вправо
        let scrollBottom = html.scrollTop + html.clientHeight; // скролл влево
        // если пользователь достиг конца
        if (Math.ceil(scrollRight) === html.scrollWidth) {
            // функция которая увеличивает таблицу по горизонтали
            updateTableGor()    
        }
        // если пользователь достиг конца
        if (Math.floor(scrollBottom) === html.scrollHeight) {
            // функция которая увеличивает таблицу по вертикали
            updateTableVert()
        }
        // функция которая подстраивает ячейки по ширине при скроллинге
        increaseSizeForScroll()
        
        // console.log(JSON.stringify(state));
        // console.log(ArrayState);
    })





}

export default scrollTable;