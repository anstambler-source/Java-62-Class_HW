const persons = []
const ages = []

const ol = document.createElement('ol');
document.body.insertBefore(ol, stats);

const divMin = document.createElement('div');
const divMax = document.createElement('div');
const averageAge = document.createElement('div');
const totalPersons = document.createElement('div');
divMin.style.fontSize = divMax.style.fontSize = averageAge.style.fontSize = totalPersons.style.fontSize = '1.2rem'
divMin.innerText = 'Min age: '
divMax.innerText = 'Max age: '
averageAge.innerText = 'Average age: '
totalPersons.innerHTML = 'Total persons: '
stats.append(divMin, divMax, averageAge, totalPersons);


function addPerson() {
    if (!id.value || !birthdate.value) {
        emptyFields()
        return alert('Field ID or Birthdate is empty!')
    }

    const ageValue = calculateAge(birthdate.value)
    if (ageValue === -1) {
        emptyFields()
        return alert('Wrong Birthdate!')
    }

    if (persons.find(p => p.id === id.value)) {
        emptyFields()
        return alert('This ID is already in database!')
    }

    const newPerson = new Person(id.value, firstName.value, lastName.value, birthdate.value)
    persons.push(newPerson)
    ages.push(ageValue)

    const li = document.createElement('li');
    li.innerText = newPerson;
    li.appendChild(createButtDel(li, id.value, ageValue))
    ol.appendChild(li);
    emptyFields()
}


function Person(id, firstName, lastName, birthdate) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.toString = function () {
        return `ID: ${this.id}, First Name: ${this.firstName}, Last Name: ${this.lastName}, Birthdate: ${this.birthdate}`
    }
}

function emptyFields() {id.value = firstName.value = lastName.value = birthdate.value = '';}

function changeStats(divMin, divMax, averageAge, totalPersons) {
    divMin.innerText = ages.length ? `Min age: ${Math.min(...ages)}` : 'Min age: ';
    divMax.innerText = ages.length ? `Max age: ${Math.max(...ages)}` : 'Max age: ';
    averageAge.innerText = ages.length ? `Average age: ${Math.trunc(ages.reduce((accum , ag) => accum + ag, 0) / ages.length * 100) / 100}` : 'Average age: ';
    totalPersons.innerText = ages.length ? `Total persons: ${ages.length}` : 'Total persons: ';
    stats.replaceChild(divMin, divMin);
    stats.replaceChild(divMax, divMax);
    stats.replaceChild(averageAge, averageAge);
    stats.replaceChild(totalPersons, totalPersons);
}

add.addEventListener('click', () => {
    addPerson()
    changeStats(divMin, divMax, averageAge, totalPersons);
})

function calculateAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function createButtDel (li, idValue, ageValue) {
    const but = document.createElement('button');
    but.innerText = 'Delete';
    but.style.color = 'black';
    but.style.backgroundColor = 'orange';
    but.style.marginLeft = '5px'
    but.addEventListener('click', () => {
        persons.splice(persons.findIndex(e => e.id === idValue), 1);
        ages.splice(ages.indexOf(ageValue), 1);
        li.remove();
        changeStats(divMin, divMax, averageAge, totalPersons);
    })
    return but;
}
