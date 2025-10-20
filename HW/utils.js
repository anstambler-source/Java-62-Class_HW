function createButtonDel(id, callback) {
    const buttonDel = document.createElement("button");
    buttonDel.append('delete');
    buttonDel.style.color = 'red';
    buttonDel.style.marginLeft = '5px';
    buttonDel.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        firm.removeEmployee(id)
        changeStats(divMin, divMax, averageAge, totalSalary, averageSalary, totalEmployees)
        if (typeof callback === 'function') {
            callback();
        }
    });
    return buttonDel;
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    element.append(content);
    return element;
}