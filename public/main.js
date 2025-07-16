
const topMenuBar = document.getElementById("top-menu-bar");
const topToggleMenuBar = document.getElementById("top-toggle-menu-bar");

document.addEventListener("click", (event) => {
    if (topToggleMenuBar.contains(event.target)) {
        topMenuBar.classList.toggle("custom-top-menu-expand");
        topMenuBar.classList.toggle("hidden");
    //Click to toggle the menu bar
    } else {
        //Outside click to hide the menu bar
        if (topMenuBar.classList.contains("custom-top-menu-expand")) {
            topMenuBar.classList.remove("custom-top-menu-expand");
            topMenuBar.classList.add("hidden");
        }
    }
})