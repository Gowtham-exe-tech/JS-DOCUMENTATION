const applicationsTableBody = document.getElementById("applicationsTableBody");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const totalApplications = document.getElementById("totalApplications");
const pendingApplications = document.getElementById("pendingApplications");
const shortlistedApplications = document.getElementById("shortlistedApplications");
const rejectedApplications = document.getElementById("rejectedApplications");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");
const applicationDetails = document.getElementById("applicationDetails");
const detailsContent = document.getElementById("detailsContent");
const detailsApplicationId = document.getElementById("detailsApplicationId");
const closeDetailsBtn = document.getElementById("closeDetailsBtn");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");

let applications = [];

// Load JSON data
async function loadApplications() {
    try {
        loadingMessage.style.display = "block";
        errorMessage.textContent = "";
        const response = await fetch("../data/applications.json");
        if (!response.ok) {
            throw new Error(
                `Failed to load applications: ${response.status}`
            );
        }
        applications = await response.json();
        console.log("Applications:", applications);
        updateSummary();
        renderApplications(applications);

    } catch (error) {
        console.error(error);
        errorMessage.textContent =
            "Unable to load application data.";

    } finally {
        loadingMessage.style.display = "none";
    }
}

// Update dashboard summary
function updateSummary() {
    totalApplications.textContent =
        applications.length;
    const pendingCount = applications.filter(application => application.status.current === "Pending").length;

    const shortlistedCount = applications.filter( application => application.status.current === "Shortlisted" ).length;

    const rejectedCount = applications.filter( application => application.status.current === "Rejected" ).length;

    pendingApplications.textContent = pendingCount;
    shortlistedApplications.textContent = shortlistedCount;
    rejectedApplications.textContent = rejectedCount;
}

// Render applications table
function renderApplications(applicationList) {
    applicationsTableBody.innerHTML = "";
    resultCount.textContent = `${applicationList.length} applications`;

    if (applicationList.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }
    emptyMessage.style.display = "none";

    applicationList.forEach(application => {
        const row = document.createElement("tr");
        const status = application.status.current;
        const statusClass = status.toLowerCase();
        row.innerHTML = `
            <td>
                ${application.id}
            </td>

            <td>
                ${application.applicant.fullName}
            </td>

            <td>
                ${application.application.position}
            </td>

            <td>
                ${application.applicant.address.city}
            </td>

            <td>
                <span class="status status-${statusClass}">
                    ${status}
                </span>
            </td>

            <td>

                <button
                    type="button"
                    class="view-btn"
                    data-id="${application.id}"
                >
                    View
                </button>

            </td>`;
        applicationsTableBody.appendChild(row);
    });
}

// Search + filter
function filterApplications() {

    const searchValue = searchInput.value.trim().toLowerCase();
    const selectedStatus = statusFilter.value;
    const filteredApplications = applications.filter(application => {
            const name = application.applicant.fullName.toLowerCase();
            const id = application.id.toLowerCase();
            const position = application.application.position.toLowerCase();
            const city = application.applicant.address.city.toLowerCase();
            const matchesSearch = name.includes(searchValue) || id.includes(searchValue) || position.includes(searchValue) || city.includes(searchValue);
            const matchesStatus = selectedStatus === "all" ||  application.status.current === selectedStatus;
            return matchesSearch && matchesStatus;
        });
    renderApplications(filteredApplications);
}

// View one application
function viewApplication(applicationId) {
    const application = applications.find( application => application.id === applicationId);

    if (!application) {
        console.error( "Application not found:", applicationId);
        return;
    }
    console.log( "Selected application:", application);

    renderApplicationDetails(application);

    applicationDetails.style.display ="block";
    applicationDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Render complete application details
function renderApplicationDetails(application) {
    const applicant = application.applicant;
    const job = application.application;
    const status = application.status;

    const educationHTML = application.education.map(education => {
                return `
                    <div class="nested-card">

                        <h4>
                            ${education.degree}
                        </h4>

                        <p>
                            <strong>
                                Institution:
                            </strong>

                            ${education.institution}
                        </p>

                        <p>
                            <strong>
                                CGPA:
                            </strong>

                            ${education.cgpa}
                        </p>

                    </div>`;
            }).join("");

    const skillsHTML = application.skills.map(skill => {
                return `
                    <div class="nested-card">

                        <h4>
                            ${skill.name}
                        </h4>

                        <p>
                            <strong>
                                Level:
                            </strong>

                            ${skill.level}
                        </p>

                        <p>
                            <strong>
                                Experience:
                            </strong>

                            ${skill.experienceYears}
                            years
                        </p>

                    </div>`;
            }).join("");

    let internshipsHTML = "";
    if (application.internships.length === 0) {
        internshipsHTML = `
            <div class="nested-card">
                <p>
                    No internship experience provided.
                </p>
            </div>`;
    } else {
        internshipsHTML = application.internships.map(internship => {

                    const technologies = internship.technologies.map( technology => `<span class="tag"> ${technology}</span>`).join("");
                    return `
                        <div class="nested-card">

                            <h4>
                                ${internship.company}
                            </h4>

                            <p>
                                <strong>
                                    Role:
                                </strong>

                                ${internship.role}
                            </p>

                            <p>
                                <strong>
                                    Location:
                                </strong>

                                ${internship.location}
                            </p>

                            <p>
                                <strong>
                                    Period:
                                </strong>

                                ${internship.period}
                            </p>

                            <p>
                                <strong>
                                    Duration:
                                </strong>

                                ${internship.durationMonths}
                                months
                            </p>

                            <div class="tag-list">
                                ${technologies}
                            </div>
                        </div>`;
                }).join("");
    }

    let reviewHTML = "";
    if (application.review.reviewed) {
        reviewHTML = `
            <div class="detail-grid">
                <div class="detail-item">
                    <span class="label">
                        Rating
                    </span>
                    <span class="value">
                        ${application.review.rating}
                        / 5
                    </span>
                </div>

                <div class="detail-item">
                    <span class="label">
                        Reviewer
                    </span>

                    <span class="value">
                        ${application.review.reviewer}
                    </span>

                </div>

            </div>


            <div class="nested-card">

                <p>
                    <strong>
                        Comment:
                    </strong>
                </p>

                <p>
                    ${application.review.comment}
                </p>

            </div>`;

    } else {
        reviewHTML = `
            <div class="nested-card">
                <p>
                    This application hasnot been reviewed yet.
                </p>
            </div>`;
    }

    let resumeName = "Not provided";
    if (application.resume) {
        resumeName = application.resume.fileName || application.resume.name || "Resume available";
    }

    detailsApplicationId.textContent = application.id;
    detailsContent.innerHTML = `

        <!-- Personal Information -->

        <section class="detail-section">

            <h3>
                Personal Information
            </h3>

            <div class="detail-grid">

                <div class="detail-item">

                    <span class="label">
                        Full Name
                    </span>

                    <span class="value">
                        ${applicant.fullName}
                    </span>

                </div>


                <div class="detail-item">

                    <span class="label">
                        Age
                    </span>

                    <span class="value">
                        ${applicant.age}
                    </span>

                </div>


                <div class="detail-item">

                    <span class="label">
                        Email
                    </span>

                    <span class="value">
                        ${applicant.email}
                    </span>

                </div>


                <div class="detail-item">

                    <span class="label">
                        Phone
                    </span>

                    <span class="value">
                        ${applicant.phone}
                    </span>

                </div>


                <div class="detail-item">

                    <span class="label">
                        City
                    </span>

                    <span class="value">
                        ${applicant.address.city}
                    </span>

                </div>


                <div class="detail-item">

                    <span class="label">
                        State
                    </span>

                    <span class="value">
                        ${applicant.address.state}
                    </span>

                </div>

            </div>

        </section>


        <!-- Application Information -->

        <section class="detail-section">

            <h3>
                Application Information
            </h3>

            <div class="detail-grid">

                <div class="detail-item">

                    <span class="label">
                        Position
                    </span>

                    <span class="value">
                        ${job.position}
                    </span>

                </div>


                <div class="detail-item">

                    <span class="label">
                        Department
                    </span>

                    <span class="value">
                        ${job.department}
                    </span>

                </div>


                <div class="detail-item">

                    <span class="label">
                        Applied Through
                    </span>

                    <span class="value">
                        ${job.source}
                    </span>

                </div>


                <div class="detail-item">

                    <span class="label">
                        Applied Date
                    </span>

                    <span class="value">
                        ${job.appliedDate}
                    </span>

                </div>


                <div class="detail-item">

                    <span class="label">
                        Current Status
                    </span>

                    <span class="value">
                        ${status.current}
                    </span>

                </div>

            </div>

        </section>


        <!-- Education -->

        <section class="detail-section">

            <h3>
                Education
            </h3>

            <div class="nested-list">

                ${educationHTML}

            </div>

        </section>


        <!-- Skills -->

        <section class="detail-section">

            <h3>
                Skills
            </h3>

            <div class="nested-list">

                ${skillsHTML}

            </div>

        </section>


        <!-- Internship -->

        <section class="detail-section">

            <h3>
                Internship Experience
            </h3>

            <div class="nested-list">

                ${internshipsHTML}

            </div>

        </section>


        <!-- Resume -->

        <section class="detail-section">

            <h3>
                Resume
            </h3>

            <div class="nested-card">

                <p>
                    <strong>
                        File:
                    </strong>

                    ${resumeName}
                </p>

            </div>

        </section>


        <!-- Review -->

        <section class="detail-section">

            <h3>
                Review
            </h3>

            ${reviewHTML}

        </section>

    `;
}


// View button event delegation
applicationsTableBody.addEventListener(
    "click",
    function (event) {
        if (
            !event.target.classList.contains("view-btn")
        ) {
            return;
        }
        const applicationId = event.target.dataset.id;
        viewApplication(applicationId);
    }
);

// Search event
searchInput.addEventListener( "input", filterApplications);

// Status filter event
statusFilter.addEventListener("change", filterApplications);

// Close details
closeDetailsBtn.addEventListener("click", function () {
        applicationDetails.style.display =
            "none";
    }
);

// Start application
loadApplications();