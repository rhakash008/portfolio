// -----------------------
// DARK MODE TOGGLE
// -----------------------
const toggle = document.getElementById('darkModeToggle');

// Check saved preference on load
if(localStorage.getItem('darkMode') === 'enabled'){
    document.body.classList.add('dark-mode');
}

// Toggle dark mode on button click
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});


// -----------------------
// SKILLS ANIMATION
// -----------------------
const skills = document.querySelectorAll(".skill-bar");

// Function to animate width and percentage
function animateSkills() {
    skills.forEach(skill => {
        const value = skill.getAttribute("data-skill");
        const bar = skill.querySelector("span");
        const percentText = skill.querySelector(".skill-percent");

        // Animate width
        bar.style.width = value;

        // Animate percentage counting
        let count = 0;
        const target = parseInt(value);
        const interval = setInterval(() => {
            if(count >= target){
                clearInterval(interval);
            } else {
                count++;
                percentText.textContent = count + "%";
            }
        }, 15); // Speed of counting, adjust if too fast/slow
    });
}

// Animate when the skills section is in view
window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2; // Trigger a bit before fully visible

    if (sectionPos < screenPos) {
        animateSkills();
    }
});

// Optionally, run once if skills section is already in view on load
window.addEventListener("load", () => {
    const skillsSection = document.getElementById("skills");
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        animateSkills();
    }
});