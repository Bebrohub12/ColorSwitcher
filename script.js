

let btn = document.querySelectorAll(".btn")
let body = document.querySelector(".wraper")


btn.forEach(function (buttons) {
    buttons.addEventListener("click", function (e) {
        if (e.target.id === "red") {
            body.style.backgroundColor = `${e.target.id}`
        }
        if (e.target.id === "grey") {
            body.style.backgroundColor = `${e.target.id}`
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = `${e.target.id}`
        }
        if (e.target.id === "pink") {
            body.style.backgroundColor = `${e.target.id}`
        }


    })
})
