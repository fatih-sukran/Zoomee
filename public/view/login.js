import fetch from "node-fetch";

const btnLogin = document.getElementById("btnLogin")
const url = "http://localhost:3000/login"

btnLogin.addEventListener('click', () => {
    console.log("click çalışıyor")
    fetch(url, {
        method: "POST", body: JSON.stringify({
            name: "Deska", email: "deska@gmail.com", phone: "342234553"
        })
    }).then(result => {
        // do something with the result
        console.log("Completed with result:", result);
    }).catch(err => {
        // if any error occured, then catch it here
        console.error(err);
    });
})