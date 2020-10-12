const clickOnButtonAll = () => {
    let buttonAll = document.querySelector('.button-all')
    let cells = document.querySelectorAll('.cell')

    buttonAll.addEventListener('click', () => {
        cells.forEach(item => item.classList.add('selectCell'))
    })
}
export default clickOnButtonAll;