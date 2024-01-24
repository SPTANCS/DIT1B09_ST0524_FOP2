// custombutton.js
class CustomButton extends HTMLButtonElement {
    constructor() {
        super();
        // Set the button's text content and style
        this.textContent = this.textContent || 'Click me';
        this.style.backgroundColor = this.getAttribute('color') || 'gray';
        this.style.color = 'white';
        this.style.padding = '10px';

        // Add rounded corners to the button
        this.style.borderRadius = '5px';

        // Add event listener to button
        this.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
}

// Define the custom element
customElements.define('custom-button', CustomButton, { extends: "button" });
