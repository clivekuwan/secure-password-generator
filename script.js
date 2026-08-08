function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
   

    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const password = document.getElementById("password");

    password.select();
    password.setSelectionrange(0, 99999);

    navigator.clipboard.writeText(password.value);

    alert("password copied!");
}

