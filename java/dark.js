// to switch page to dark mode

// for the button to trigger the darkmode css
const toggle = document.getElementById("toggle");
const body = document.body;
const icon = document.getElementById("icon");

//  to remember the user theme choice 
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggle.classList.add("dark");
    icon.textContent = "🌙";
}

// to switch between modes and change the icon on the toggle btn
toggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        toggle.classList.remove("dark");
        icon.textContent = "🌞";
        localStorage.setItem("darkMode", "disabled");
    } else {
        body.classList.add("dark-mode");
        toggle.classList.add("dark");
        icon.textContent = "🌙";
        localStorage.setItem("darkMode", "enabled");
    }
});
