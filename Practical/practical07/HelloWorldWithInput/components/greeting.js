const template = document.createElement("template");
template.innerHTML = /*html*/`
  <style>
    .hello-world h1 {
      font-weight: bold;
      font-family: sans-serif;
      color: red;
    }
  </style>
  <div class="hello-world">
  <h1>Hello <span id="name"></span>!</h1>
  <p>Your admin number is <span id="admin"></span>.</p>
  </div>
`;

class Greeting extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // What if it's {mode: "closed"} ?
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("#name").innerText = "World";
    this.shadowRoot.querySelector("#admin").innerText = "0";
  }

  static get observedAttributes() {
    return ["name", "admin"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    console.log("attributeChangedCallback() called");
    // console.log(property, oldValue, newValue);

    // When oldValue is null, it indicates that none of
    // the greeting's attributes have been changed yet.
    if (oldValue === null || oldValue === newValue) return;
    this[property] = newValue;
    updateGreeting(property, this);
  }

  connectedCallback() {
    // Do nothing when the browser adds this component to the document.
  }
}

customElements.define("custom-greeting", Greeting);

function updateGreeting(attribute, elem) {
  console.log("updateGreeting() called");
  // console.log(attribute);
  // console.log(elem);
  // console.log(elem[attribute]); // This is the new value.
  const shadow = elem.shadowRoot;

  let element = null;
  switch (attribute) {
    case "name":
      element = shadow.querySelector("#name");
      break;
    case "admin":
      element = shadow.querySelector("#admin");
      break;
  }
  element.innerHTML = elem[attribute];
}
