const template = document.createElement('template');

template.innerHTML = /*html*/`
    <style>
        :host {
            display : block;
        }
        input {
          width: 300px;
        }
        #error-message {
          color: red;
          display: none;
        }    
    </style>
    <input /><span id="error-message">Invlaid input</span>
`;

class ValidTextBox extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode: "closed"});
    let clone = template.content.cloneNode(true);
    this.root.appendChild(clone);
    this.root.querySelector('input').addEventListener("input", (ev) => {
      this.validateInput();
    });
  }

  // define attributes you need
  static get observedAttributes() {
    return ['validtype'];
  }

  get validtype() {
    return this.getAttribute('validtype');
  }
  set validtype(value) {
    this.setAttribute('validtype', value);
  }

  get value() {
    let textbox = this.root.querySelector("input");
    return textbox.value;
  }
  set value(newValue) {
    let textbox = this.root.querySelector("input");
    textbox.value = newValue;
  }

  validateInput() {
    const errorMessage = this.root.querySelector('#error-message');
    const inputValue = this.value;

    let isValid = true;
    if (inputValue.length > 0) {
      switch (this.validtype) {
        case "letter":
          console.log('letter only');
          isValid = /^[a-zA-Z\s]+$/.test(inputValue);
          break;
        case "number":
          console.log('number only');
          isValid = /^[0-9]+$/.test(inputValue);
          break;
      }
    }
    if (isValid) {
      errorMessage.style.display = 'none';
      const valueChanged = new CustomEvent('valueChanged', {detail: this.value});
      this.dispatchEvent(valueChanged);
    } else {
      errorMessage.style.display = 'block';      
    }
  }
}

window.customElements.define("valid-textbox", ValidTextBox);
