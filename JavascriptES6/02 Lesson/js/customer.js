var u_name = document.myForm.u_name;
var message = document.getElementById('message');

function runMe() {
    if (u_name.value.length < 3) {
        message.innerHTML = "Please enter more";
        message.style.color = "red";
        u_name.style.backgroundColor = "red";
        u_name.style.color = "white";
    } else if (u_name.value.length == 5) {
        message.innerHTML = "Nice, ok";
        message.style.color = "green";
        u_name.style.backgroundColor = "green";
        u_name.style.color = "white";
    } else if (u_name.value.length > 8) {
        message.innerHTML = "Limit has been reached!";
        message.style.color = "orange";
        u_name.style.backgroundColor = "orange";
        u_name.style.color = "white";
    }
}