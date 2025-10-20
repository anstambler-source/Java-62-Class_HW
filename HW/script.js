// TODO Homework: continue develop classes Person, Employee, Company
// Hint: thinking in OOD (Object Oriented Design). NB! Encapsulation
const firm = new Company();

const divMin = createInfoElement('Min age: ', 'div');
const divMax = createInfoElement('Max age: ', 'div');
const averageAge = createInfoElement('Average age: ', 'div');
const totalSalary = createInfoElement('Total Salary: ', 'div');
const averageSalary = createInfoElement('Average Salary: ', 'div');
const totalEmployees = createInfoElement('Total employees: ', 'div');
divMin.style.fontSize = divMax.style.fontSize = averageAge.style.fontSize = totalSalary.style.fontSize = averageSalary.style.fontSize = totalEmployees.style.fontSize = '1.2rem';
stats.append(divMin, divMax, averageAge, totalSalary, averageSalary, totalEmployees);


function addPerson() {
    if (!id.value || !birthdate.value) {
        emptyFields()
        return alert('Field ID or Birthdate is empty!')
    }

    if (salary.value < 0) {
        emptyFields()
        return alert('Wrong salary!')
    }

    const newEmployee = new Employee(id.value, firstName.value, lastName.value, birthdate.value, salary.value);
    const ageValue = newEmployee.age;

    if (ageValue === -1) {
        emptyFields()
        return alert('Wrong Birthdate!')
    }

    if (!firm.addEmployee(newEmployee)) {
        emptyFields()
        return alert('This ID is already in database!')
    }

    firm.addEmployee(newEmployee)

    const li = createInfoElement(newEmployee, 'li')
    li.appendChild(createButtonDel(id.value))
    listEmployees.appendChild(li);
    emptyFields()
}


function emptyFields() {id.value = firstName.value = lastName.value = birthdate.value = salary.value = '';}

add.addEventListener('click', () => {
    addPerson()
    firm.changeStats(divMin, divMax, averageAge, totalSalary, averageSalary, totalEmployees);
})
