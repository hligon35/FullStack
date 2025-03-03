let token;

window.onload = function() {
document.querySelector("#loginBtn").addEventListener("click", function(){
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    login(username, password)

})}

function togglePassword() {
    const passwordField = document.querySelector("#password");
    const toggleIcon = document.querySelector("#togglePassword");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}

document.querySelector("#togglePassword").addEventListener("click", togglePassword);


async function login(username, password){
    const login_cred = {
        username,
        password
    }
    // send login post request to backend 
    const response = await fetch("http://localhost:3000/api/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(login_cred)
    })

    if(response.ok){
        // take token and save it in local storage
        const tokenResponse = await response.json()
        token = tokenResponse.token
        uname = tokenResponse.username2
        auth = tokenResponse.auth
        console.log(token)

        // save it
        localStorage.setItem("token", token)
        localStorage.setItem("uname", uname)
        localStorage.setItem("auth", auth)
        // redirect to home page
        window.location.replace("index.html")
    }
    else{
        document.querySelector("#errorMsg").innerHTML = "Bad username and Password"
    }
}