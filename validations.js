// prevent of submit
let form = document.querySelector(".form")
form.addEventListener("submit", e => {
    if (!(eu && ep === 5)) {
        e.preventDefault()
        if (!eu) {
            form.username.classList.add("is-invalid")
        }
        if (ep !== 5) {
            form.password.classList.add("is-invalid")
        }
    }
})

// regex
// userPatern => up
// [a-zA-Z] mean the first character must be letter
let up = /^[a-zA-Z][\w ._]{5,25}$/

// this section cause when we write username in usernamebox , it write above of form too
// username is the name that define in html's form
// e.target = form.username
// value is the value we write that.
// is-valid cause , if we enter correct username we see green border
// #username is id in html's form
// username's input
// evaluateUassword => eu
let username = document.querySelector("#username")
let eu = false;
form.username.addEventListener("keyup", e => {
    if (e.target.value) {
        username.textContent = e.target.value.toLowerCase()
        if (up.test(e.target.value)) {
            eu = true
            e.target.classList.add("is-valid")
            e.target.classList.remove("is-invalid")
        } else {
            eu = false
            e.target.classList.add("is-invalid")
        }
    } else {
        username.innerHTML = '<i> Please write something </i>'
    }

})

// password's input & seepassword
// evaluatePassword => ep
let SeePassword = document.querySelector("#see-password")
let password = document.querySelector("#password")
let ep = 0;
form.password.addEventListener("keyup", e => {
    if (e.target.value) {
        password.textContent = "*".repeat(e.target.value.length)
        SeePassword.textContent = e.target.value
        ep = 0
        ep += /[A-Z]/.test(e.target.value) ? 1 : 0;
        ep += /[a-z]/.test(e.target.value) ? 1 : 0;
        ep += /[0-9]/.test(e.target.value) ? 1 : 0;
        ep += /[\W]/.test(e.target.value) ? 1 : 0;
        //for length
        ep += e.target.value.length >= 6 ? 1 : 0;
        if (ep === 5) {
            e.target.classList.add("is-valid")
            e.target.classList.remove("is-invalid")
        } else {
            e.target.classList.add("is-invalid")
        }
    } else {
        password.innerHTML = '<i> Please enter password </i>'
        SeePassword.innerHTML = '<i> Please enter password </i>'
    }

})