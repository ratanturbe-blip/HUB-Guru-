// Hub Guru JavaScript

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Hub Guru!");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("This feature will be available soon!");
        });
    });
});
