const studentForm = document.getElementById("studentForm");
const studentContainer = document.querySelector(".studentsList");


const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

const students = JSON.parse(localStorage.getItem("studentList")) || []; 
// here i use [] as if nothing in localstorage in addStudent section while pushing "null" will be in students (fallback value)

const addStudent = (student) => {
    students.push(student);
    localStorage.setItem("studentList", JSON.stringify(students));
    // here first i tried to store student instead of students, so the push function produce error as students need to be array but it becomes object due to this.
};

const createStudent = ({name, age, roll}) => {
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");

    studentName.textContent = `Student Name: ${name}`;
    studentAge.textContent = `Student Age: ${age}`;
    studentRoll.textContent = `Student Roll: ${roll}`;


    studentDiv.append(studentName, studentAge, studentRoll);
    studentContainer.appendChild(studentDiv);
};


studentForm.addEventListener("submit", (e) => {
  
  e.preventDefault();

  const newstudent = {
    name: nameInput.value,
    age: Number(ageInput.value),
    roll: Number(rollInput.value),
  };
  
  addStudent(newstudent);
  
  createStudent(newstudent);

  studentForm.reset();

});


// Things Found in LocalStorage
// - push() on null
// - push() on an object instead of an array
// - Saving student instead of students
// - Understanding localStorage.getItem() returns a string
// - Understanding JSON.stringify() vs JSON.parse()
// - Using || [] when storage has no data
// - Separating application data (students) from the DOM
// - Rendering loaded data with students.forEach(createStudent)
