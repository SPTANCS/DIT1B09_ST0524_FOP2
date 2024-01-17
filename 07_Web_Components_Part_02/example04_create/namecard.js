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

    // define attributes you need
    static get observedAttributes() {
        return ['username', 'usercontact', 'useremail'];
    }

    get username() {
        return this.getAttribute("username");
    }
    set username(value) {
        this.setAttribute("username", value);
    }

    get usercontact() {
        return this.getAttribute("usercontact");
    }
    set usercontact(value) {
        this.setAttribute("usercontact", value);
    }

    get useremail() {
        return this.getAttribute("useremail");
    }
    set useremail(value) {
        this.setAttribute("useremail", value);
    }

    // handle updating of Attribute
    attributeChangedCallback(atterName, oldValue, newValue) {
        atterName = atterName.toLowerCase();

        let element;
        switch (atterName) {
            case 'username':
                element = this.root.querySelector("#userName");
                element.textContent = newValue;
            break;
            case 'usercontact':
                element = this.root.querySelector("#contactNumber");
                element.textContent = newValue;
            break;
            case 'useremail':
                element = this.root.querySelector("#userEmail");
                element.textContent = newValue;
            break;
        }
    }
}

window.customElements.define('name-card', NameCard);