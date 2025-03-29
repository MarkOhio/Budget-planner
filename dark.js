
const toggle = document.getElementById("toggle");
const body = document.body;
const icon = document.getElementById("icon");

 
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggle.classList.add("dark");
    icon.textContent = "🌙";
}

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
