// console.log('connected!');

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h1>Andrew Diggins Portfolio</h1>
        <div id="navigationButtons">
            <button onclick="window.location.href = 'index.html' ">Home</button>
            <button onclick="window.location.href = 'HTML_Games.html' ">HTML Games</button>
            <button onclick="window.location.href = 'Game1.html' ">Game #1</button>
            <button onclick="window.location.href = 'Game2.html' ">Game #2</button>
            <button onclick="window.location.href = 'Game3.html' ">Game #3</button>
        </div>
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <p> 🡻 🡻 &emsp; Like what you see?  Give me shout! &emsp; 🡻 🡻 </p>
            <form action="https://api.web3forms.com/submit" method="POST" id="footerForm">
                <div class="footerRow" id="row1">
                    <input type="hidden" name="access_key" value="ba7863c2-3747-4387-be29-e34ffd7f5549">
                    <input type="text" placeholder="Your Name" name="Contact's name">
                    <input type="text" placeholder="Who do you work for?" name="Contact's workplace">
                    <input type="text" placeholder="How can I get back to you?" name="Contact's email">
                </div>
                <div class="footerRow" id="row2">
                    <input type="text" placeholder="Feedback? What did you like?" name="Given feedback">
                    <input type="submit" id="footerFormSubmit">
                </div>
            </form>
        `
    }
}

class MyOpener extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div id="opener">
            <form action="https://api.web3forms.com/submit" method="POST" id="VisitorForm">
                <input type="hidden" name="access_key" value="ba7863c2-3747-4387-be29-e34ffd7f5549">
                <label for=""> Name <input type="text" id="visitorName" name="Visitor's Name"> </label>
                <label for=""> Company <input type="text" id="visitorCompany" name="Company"> </label>
                <input type="submit" value = "Submit Details" id="SubmitVisitor">
                <input type="button" value = "Abstain for now" id="SubmitAnon">
            </form>
        </div>
        `
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('my-opener', MyOpener);