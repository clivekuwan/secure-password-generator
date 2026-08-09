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
    navigator.clipboard.writeText(password.value);
    alert("Password copied!")
}
