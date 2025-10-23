let group = {
    title: 'Java 62',
    students: ['Ann', 'Alina', 'Anna', 'Diana', 'Ludmila', 'Marta', 'Natalia', 'Tetiana',
        'Julia', 'Stella', 'Sophia'],
    showList: function() {
        const show = function(name) {
            console.log(`${this.title}: ${name}`)
        }
        this.students.forEach(show.bind(this));
    }
}


// Unmodified
group.showList();
const newGroup = group;
group = null;
console.log('=========');
newGroup.showList();