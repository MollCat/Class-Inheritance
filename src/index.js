class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }


    describe() {
        console.log(
            `This person is ${this.name}, their ${this.age}, and they are ${this.gender}.`,
        );
    }
}

class Teacher extends Person {
    constructor(name, age, gender, id, course, contact) {
        super(name, age, gender);
        this.id = id;
        this.course = course;
        this.contact = contact;
    }
}



class Student extends Person {
    constructor(name, age, gender, id, teacher, grade, major) {
        super(name, age, gender);
        this.id = id;
        this.teacher = teacher;
        this.grade = grade;
        this.major = major;
    }
}

class Course {
    constructor(teacher, name) {
        this.teacher = teacher;
        this.students = [];
        this.name = name;
    }


    addStudent(student) {
        this.students.push(student);

    }

    describe() {
        console.log(
            `This class is ${this.name} and it's taught by ${this.teacher.name}`,
        );
        for (let student of this.students) {
            student.describe();
        }
    }
}

const dylan = new Teacher('Dylan', 20, 'male', 1, 'JS');
const js = new Course(dylan, 'JavaScript');

const hollie = new Student('Hollie', 32, 'female', 2, dylan, 'Freshman', 'JS');
const lexi = new Student('Lexi', 22, 'female', 3, dylan, 'Sophmore', 'JS');
const lok = new Student('Lok', 100, 'male', 4, dylan, 'Senior', 'JS');

js.addStudent(hollie);
js.addStudent(lexi);
js.addStudent(lok);
js.describe();
