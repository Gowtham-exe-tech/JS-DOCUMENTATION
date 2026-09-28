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

function addItem(template, container, itemClass) {
    const item = template.content.cloneNode(true);
    const itemElement = item.querySelector(`.${itemClass}`);
    const removeBtn = item.querySelector(".remove");

    removeBtn.addEventListener("click", function() {
        itemElement.remove();
    });

    container.appendChild(item);
}

addEducationBtn.addEventListener("click", function() {
    addItem(educationTemplate, educationContainer, "education-item");
});

addInternshipBtn.addEventListener("click", function() {
    addItem(internshipTemplate, internshipContainer, "internship-item");
});

addSkillBtn.addEventListener("click", function() {
    addItem(skillsTemplate, skillsContainer, "skill-item");
});

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
