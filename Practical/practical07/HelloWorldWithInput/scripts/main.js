document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    const customGreeting = document.querySelector("#custom-greeting");

    document.querySelector("#name-input").addEventListener('valueChanged', (event) => {
        customGreeting.setAttribute("name", event.detail);
    });

    document.querySelector("#admin-input").addEventListener('valueChanged', (event) => {
        customGreeting.setAttribute("admin", event.detail);
    });
});