setTimeout(function() {
  alert("Welcome to my first site!\n\n Using html, css and javascript!");
}, 500);
// Function to format the phone number input!
// This function formats the phone number as the user types.
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '').substring(0, 10);
    let formatted = value;
    if (value.length > 6) {
        formatted = `${value.substring(0,3)}-${value.substring(3,6)}-${value.substring(6,10)}`;
    } else if (value.length > 3) {
        formatted = `${value.substring(0,3)}-${value.substring(3,6)}`;
    } else if (value.length > 0) {
        formatted = `${value}`;
    }
    input.value = formatted;
}
// Function to validate form fields!
// This function checks if the required fields are filled out.
// If any field is empty, it alerts the user and returns false.
function validateForm() {
    const form = document.forms["infoForm"];
    const fields = [
        { name: "un", label: "Username" },
        { name: "pass", label: "Password" },
        { name: "email", label: "Email" },
        { name: "phone", label: "Phone number" },
        { name: "birth", label: "Your birthday"}
    ];
    for (let field of fields) {
        if (form[field.name].value.trim() === "") {
            alert(field.label + " must be filled out!");
            return false;
        }
    }
    return confirm("Are you sure you want to submit your information?");
}
// Function to show or hide the password!
// This function toggles the visibility of the password input field.
// It changes the input type between 'password' and 'text'
// and updates the checkbox title accordingly.
// It also updates the title of the checkmark icon on hover.
function showpass() {
    const passInput = document.getElementById('pass');
    const checkbox = document.getElementById('showpass-checkbox');
    const checkmark = document.getElementById('showpass-checkmark');
    if (checkbox.checked) {
        passInput.type = 'text';
        checkmark.title = 'Hide password';
    } else {
        passInput.type = 'password';
        checkmark.title = 'Show password';
    }
}
window.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('showpass-checkbox');
    const checkmark = document.getElementById('showpass-checkmark');
    function updateTitle() {
        checkmark.title = checkbox.checked ? 'Hide password' : 'Show password';
    }
    checkmark.addEventListener('mouseover', updateTitle);
    checkmark.addEventListener('mousemove', updateTitle);
});