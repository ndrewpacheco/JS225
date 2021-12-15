function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},
    info() {
      console.log(`${this.name} is a ${this.year} year student`)
    },
    listCourses() {

      console.log(this.courses);
      return this.courses;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(code, note) {
      // code = this.courses.find(course => course.code === code).name;

      if (this.notes[code]) {
        this.notes[code] += '; ' + note;
      } else {
        this.notes[code] = note;
      }
    },
    viewNotes() {
      Object.keys(this.notes).forEach(code => {
        let name = this.courses.find(course => course.code === Number(code)).name;
        console.log(`${name}: ${this.notes[code]}`)
      });
    },
    updateNote(code, note) {
      this.notes[code] = note;
    },
  }
}


function createSchool() {
  return {
    students: [],
    addStudent(name, year) {

      if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) return console.log('Invalid Year');

      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    },
    enrollStudent(student, name, code) {
      student.addCourse({ name, code, });
    },
    addGrade(student, courseName, grade) {
      let course = student.courses.filter(course => course.name === courseName)[0];
      course.grade = grade;
    },
    getReportCard(student) {
      student.courses.forEach(course => {
        let courseGrade = course.grade;
        if (courseGrade === undefined) courseGrade = "In Progress";
        console.log(course.name + ': ' + courseGrade);
      });
    },
    courseReport(courseName) {
      let grades = [];
      console.log(`=${courseName} Grades=`);
      this.students.forEach(student => {
        let course = student.courses.filter(course => course.name === courseName)[0];
        // grades.push(course.grade);
        if (course !== undefined) {
          console.log(`${student.name}: ${course.grade}`)
        }
      });
    },
  }
}



// foo.addCourse({ name: 'Math', code: 101, grade: 95, });
// foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });
// foo.addCourse({ name: 'Physics', code: 202, });


// bar.addCourse({ name: 'Math', code: 101, grade: 91, });


// qux.addCourse({ name: 'Math', code: 101, grade: 93, });
// qux.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });



let school = createSchool();

let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');


school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math',  102);
school.enrollStudent(foo, 'Physics',  202);
school.enrollStudent(bar, 'Math',  101);
school.enrollStudent(qux, 'Math',  101);
school.enrollStudent(qux, 'Advanced Math',  102);

school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);
school.addGrade(bar, 'Math', 91);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);

// school.students.forEach(student => console.log(student.courses));
school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined

