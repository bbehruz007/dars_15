let from = document.getElementById("loginForm")

from.addEventListener("submit", (e) => {
    e.preventDefault()

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (username.value == "behruz" && password.value == 1234) {
        window.location.href = "/admin.html"
    } else {
        alert('Parol yoki login hato.');
    }
})
