const cellSelection = () => {
    const wrapper = document.querySelector('.wrapper')




    let attributeStart = null, // объявление переменных в кторых хрянятся данные о размерах таблицы получаемы спомощью мыши
        attributeEnd = null,
        attributeEndIntermidate = null,
        parentElemIntermidate = null,
        parentElemIntermidateAtr = null,
        parentElemAtr = 0,
        parentElemStart = null,

        parentElem, selectCell, rows, edit // DOM елементы

    let parentArray = new Set([]); // сет коллекция чтобы не дублировались элеменеты


    rows = document.querySelectorAll('.row')

    document.onmousedown = (e) => {



        let target = e.target

        if (!target.closest('.cell')) return

        selectCell = document.querySelectorAll('.selectCell') // получаем все выделенные ячейки
        edit = document.querySelector('.edit')
        if (edit && edit.tagName === 'DIV') {
            edit.classList.remove('edit')
        }
        if (selectCell) {

            selectCell.forEach(item => item.classList.remove('selectCell')) // удаляем и обнуляем таблицу при нажатии левой кнопкой мыши

            attributeStart = null
            attributeEndIntermidate = null
            attributeEnd = null
            parentElemIntermidate = null
            parentElemIntermidateAtr = null
            parentElemAtr = 0
            parentElem = null
            parentElemStart = null
            parentArray.clear()
        }


        attributeStart = +target.getAttribute('data-number')
        parentElemStart = +target.parentNode.getAttribute('data-number') // получаем данные где начинается таблица 

        wrapper.onmousemove = (e) => {
            let target = e.target
            if (!target.closest('.cell')) return

            attributeEndIntermidate = attributeEnd // предпоследнее значение чтобы была возможность уменьшать таблицу
            parentElemIntermidate = parentElem // предпоследнее значение чтобы была возможность уменьшать таблицу

            if (parentElemIntermidate) {
                parentElemIntermidateAtr = +parentElemIntermidate.getAttribute('data-number') // число у линии
            }


            parentElem = target.parentNode

            parentElemAtr = +parentElem.getAttribute('data-number')
            parentArray.add(parentElem)

            attributeEnd = +target.getAttribute('data-number')

            const deleteROw = () => { // фенкция для удаления линии
                if (parentElemStart >= parentElemAtr) {
                    if (parentElemIntermidateAtr < parentElemAtr) {
                        if (parentElemIntermidate) {
                            parentElemIntermidate.children.forEach(item => item.classList.remove('selectCell'))
                            parentArray.delete(parentElemIntermidate)
                        }
                    }
                }

                if (parentElemStart <= parentElemAtr) {
                    if (parentElemIntermidateAtr > parentElemAtr) {
                        if (parentElemIntermidate) {
                            parentElemIntermidate.children.forEach(item => item.classList.remove('selectCell'))
                            parentArray.delete(parentElemIntermidate)
                        }
                    }
                }
            }

            if (attributeStart <= attributeEnd) { // услоия определяющие куда направлена таблица 

                parentArray.forEach(item => {

                    for (let i = attributeStart - 1; i <= attributeEnd; i++) { // самый простой и быстры йкостыль удалене лишней ячейки слева
                        if (item.children[i]) {
                            item.children[i].classList.remove('selectCell')
                        }
                    }
                    for (let i = attributeStart; i <= attributeEnd; i++) {
                        item.children[i].classList.add('selectCell')

                    }
                    if (attributeEndIntermidate > attributeEnd) {
                        for (let i = attributeStart; i <= attributeEndIntermidate; i++) {
                            item.children[i].classList.remove('selectCell')
                        }
                    }
                    deleteROw()
                })

            } else if (attributeStart >= attributeEnd) { // услоия определяющие куда направлена таблица 

                parentArray.forEach(item => {
                    for (let i = attributeEnd; i <= attributeStart; i++) {
                        item.children[i].classList.add('selectCell')
                    }
                    if (attributeEndIntermidate < attributeEnd) {
                        for (let i = attributeEndIntermidate; i <= attributeStart; i++) {
                            if (item.children[i]) {
                                item.children[i].classList.remove('selectCell')
                            }

                        }
                    }
                    deleteROw()
                })

            }

        }
        return false
    }



    wrapper.onmouseup = () => {
        // console.log(parentElemAtr);
        // console.log(parentElemStart);
        if (parentElemAtr) {
            if (parentElemStart > parentElemAtr) { // при отпукании таблица удаляет не нужное и дорисовывает то что не успело словиться событием
                for (let i = parentElemAtr; i <= parentElemStart; i++) {
                    parentArray.forEach(item => {
                        let atr = +item.getAttribute('data-number')

                        if (!atr == i) {} else {
                            parentArray.delete(item)
                            item.children.forEach(item => item.classList.remove('selectCell'))
                        }
                    })
                    for (let k = attributeStart; k <= attributeEnd; k++) {
                        if (rows[i].children[k]) {
                            rows[i].children[k].classList.add('selectCell')
                        }

                    }
                }
            }
            if (parentElemStart > parentElemAtr) {
                for (let i = parentElemAtr; i <= parentElemStart; i++) {

                    for (let k = attributeEnd; k <= attributeStart; k++) {

                        rows[i].children[k].classList.add('selectCell')

                    }


                }
            }

            if (parentElemStart < parentElemAtr) {
                // parentArray.forEach(item => {
                    
                //     let atr = +item.getAttribute('data-number')
                //     console.log(atr);
                //     for (let i = parentElemStart; i <= parentElemAtr; i++) {
                //         // console.log(i);

                //         console.log(i);
                //         // console.log(atr);
                //         console.log(atr === i);
                //         if (!atr === i) {
                            
                //             parentArray.delete(item)
                //             item.children.forEach(item => item.classList.remove('selectCell'))
                //         }
                //         // } else {


                //     }

                // })

                for (let i = parentElemStart; i <= parentElemAtr; i++) {
                    for (let k = attributeEnd; k <= attributeStart; k++) {
                        if (rows[i].children[k]) {
                            rows[i].children[k].classList.add('selectCell')
                        }
                    }

                }
                for (let i = parentElemStart; i < parentElemAtr; i++) {
                    for (let k = attributeStart; k <= attributeEnd; k++) {
                        if (rows[i].children[k]) {
                            rows[i].children[k].classList.add('selectCell')
                        }
                    }
                }
            }



        }


        wrapper.onmousemove = null
    }
}


export default cellSelection;