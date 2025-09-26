function createButtonDel(callback) {
    const buttonDel = document.createElement("button")
    buttonDel.append('delete')
    // buttonDel.classList.add('del') // classList.add - dobavit klass k objectu
    buttonDel.style.color = 'red'
    buttonDel.style.marginLeft = '5px'
    buttonDel.addEventListener('click', e => {
        e.target.parentElement.remove()
        if (typeof callback === 'function') {
            callback()
        }
    })
    return buttonDel
}