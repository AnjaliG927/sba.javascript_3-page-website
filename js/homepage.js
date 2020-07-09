
function validateName() {
    let name = document.getElementById("username").value;
    if (name == "") {
        alert("Please enter your name");
    } else {
        document.getElementById("name").innerHTML = "Welcome! " + name;
    }
}