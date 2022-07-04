const welcome = () => {
    window.location.href = "../html/welcome.html"
}

const toggleMenu = () => {
    const menu = document.getElementById("menuPanel")
    menu.style.left = menu.style.left === "-275px" ? "0" : "-275px"
}