// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// GitHub Confirmation Function (if you still need it)
function confirmGitHubLink() {
    const userConfirmed = confirm("Do you want to go to GitHub for user mohamedelawakey?");
    if (userConfirmed) {
        window.open("https://github.com/mohamedelawakey", "_blank"); // Open the GitHub page in a new tab
    }
}

// Tooltip for project cards
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".projects-card");

    // Add your project descriptions here
    const projectDescriptions = {
        // Example: "Project Name": "This is a brief description of the project.",
    };

    projects.forEach(project => {
        project.addEventListener("mouseenter", function (event) {
            let tooltip = document.createElement("div");
            tooltip.className = "tooltip-box";
            tooltip.innerText = projectDescriptions[project.innerText] || "No description available";
            document.body.appendChild(tooltip);

            let rect = project.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;

            project.addEventListener("mouseleave", function () {
                tooltip.remove();
            });
        });
    });
});