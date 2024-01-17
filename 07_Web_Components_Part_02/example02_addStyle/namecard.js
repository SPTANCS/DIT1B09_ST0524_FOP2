const template = document.createElement('template');

template.innerHTML = /*html*/`
    <style>
        :host {
            display: block;
            border-style: outset;
            font-family: Arial, Helvetica, sans-serif;
            background-color: lightgrey;
        }
        div {
            padding: 0px 30px;
        }
        h3 {
            font-size: 2rem;
        }
        h5 {
            font-size: 1rem;
        }
    </style>
    <div>
        <h3 id='userName'>Name Goes Here</h3>
        <hr>
        <h5>Contact Number: <span id='contactNumber'>123456789</span></h5>
        <h5>Email: <span id='userEmail'>email_here@something.com</span></h5>
    </div>
`;

class NameCard extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({mode: 'closed'});

        // let simpleDiv = document.createElement('div');
        // simpleDiv.textContent = "Hello !!!!!";
        // this.root.append(simpleDiv);

        let clone = template.content.cloneNode(true);
        this.root.append(clone);
    }
}

window.customElements.define('name-card', NameCard);