class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(employee) {
        if (this._employees.findIndex(e => e.id === employee.id) === -1) {
            this._employees.push(employee);
            return true;
        }
        return false;
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    get size() {
        return this._employees.length;
    }

    changeStats(divMin, divMax, averageAge, totalSalary, averageSalary, totalEmployees) {
        divMin.innerText = firm.size ? `Min age: ${firm.employees.reduce((accum, a) => a.age < accum ? a.age : accum, firm.employees[0]['age'])}` : 'Min age: ';
        divMax.innerText = firm.size ? `Max age: ${firm.employees.reduce((accum, a) => a.age > accum ? a.age : accum, firm.employees[0]['age'])}` : 'Max age: ';
        averageAge.innerText = firm.size ? `Average age: ${(firm.employees.reduce((accum , a) => accum + a.age, 0) / firm.size).toFixed(2)}` : 'Average age: ';
        totalSalary.innerText = firm.size ? `Total salary: ${firm.employees.reduce((accum , s) => accum + +s.salary, 0)}` : 'Total Salary: ';
        averageSalary.innerText = firm.size ? `Average salary: ${(firm.employees.reduce((accum , s) => accum + +s.salary, 0) / firm.size).toFixed(2)}` : 'Average salary: ';
        totalEmployees.innerText = firm.size ? `Total employees: ${firm.size}` : 'Total employees: ';
    }
}