let navSwitch = document.getElementById("navSwitch")
let menu = document.getElementById("menu")

navSwitch.addEventListener("click", () => {
    menu.className == "menuClosed" ? menu.className = "menuOpened" : menu.className = "menuClosed"
})