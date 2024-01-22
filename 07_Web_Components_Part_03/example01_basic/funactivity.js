const template = document.createElement('template');

template.innerHTML = `
    <div>
        <h3 id='activity'>ACTIVITY GOES HERE</h3>
        <hr>
        <h5>Type: <span id='activityType'>Type of activity</span></h5>
        <h5>Number of Participant(s): <span id='participant'>No. of Participant</span></h5>
    </div>
`;

class FunActivity extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
    }
}

window.customElements.define('fun-activity', FunActivity);