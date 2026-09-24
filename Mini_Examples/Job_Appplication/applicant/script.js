// Add and remove DOM elements inside container
const addEducationBtn = document.getElementById("addEducationBtn");
const educationContainer = document.getElementById("educationContainer");
const educationTemplate = document.getElementById("educationTemplate");

const  addSkillBtn = document.getElementById("addskillbtn");
const skillsContainer = document.getElementById("skillsContainer");
const  skillsTemplate = document.getElementById("skillsTemplate");

const  addInternshipBtn = document.getElementById("addInternshipBtn");
const internshipContainer = document.getElementById("internshipContainer");
const  internshipTemplate = document.getElementById("internshipTemplate");

function addEducation() {
    const education = educationTemplate.content.cloneNode(true);
    const educationItem = education.querySelector(".education-item");
    const removeBtn = education.querySelector(".remove");

    removeBtn.addEventListener("click", function(){
        educationItem.remove();
    });

    educationContainer.appendChild(education);
}
addEducationBtn.addEventListener("click", addEducation);
addEducation();// for inital display when loaded


function addskills(){
    const skill = skillsTemplate.content.cloneNode(true);
    const skillItem = skill.querySelector(".skill-item");
    const removeBtn = skill.querySelector(".remove");

    removeBtn.addEventListener("click", function(){
        skillItem.remove();
    });
    skillsContainer.appendChild(skill);
}
addSkillBtn.addEventListener("click",addskills);
addskills();

function addintern(){
    const intern = internshipTemplate.content.cloneNode(true);
    const internItem = intern.querySelector(".internship-item");
    const removeBtn = intern.querySelector(".remove");

    removeBtn.addEventListener("click", function(){
        internItem.remove();
    });
    internshipContainer.appendChild(intern);
}
addInternshipBtn.addEventListener("click",addintern);
addintern();

// Vacency details Updating

const VacencyValue = document.getElementById("vacencyValue");
const applied = document.getElementById("applied");
const available = document.getElementById("available");
const applicationForm = document.getElementById("application-form");

const totalVacency = 10;
let applicantApplied = 0;

function updateVacancyDetails() {
    const remainingApplications = totalVacency - applicantApplied;

    VacencyValue.textContent = totalVacency;
    applied.textContent = applicantApplied;
    available.textContent = remainingApplications;
}

applicationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    applicantApplied++;
    updateVacancyDetails();
});

updateVacancyDetails(); // INITIAL VALUE
