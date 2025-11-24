console.log("Opener Check is running")

var openingElement;
window.customElements.whenDefined("my-opener").then(function () {
    console.log("my-opener has finished being created");
    openingElement = document.getElementById("opener");
    console.log(openingElement);

    if (sessionStorage.getItem("VisitorName") == null) {
        openingElement.style.display = "block";
    } else {
        openingElement.style.display = "none";
    }

    document.getElementById("VisitorForm").addEventListener("submit", function (event) {
        event.preventDefault();
        registerVisitor(false);
        document.getElementById("VisitorForm").style.display = "none";
        const formData = new FormData(event.target);
        fetch(event.target.action, {
            method: event.target.method,
            body: formData
        })  
    });

    // document.getElementById("SubmitVisitor").addEventListener('click', function (event) {
    //     event.preventDefault();
    //     registerVisitor(false);
    //     openingElement.style.display = "none";
    // })

    document.getElementById("SubmitAnon").addEventListener('click', function (event) {
        event.preventDefault();
        registerVisitor(true);
        openingElement.style.display = "none";
    })
})

// sessionStorage.setItem("VisitorName", "Michael Scott"); //DEBUG -- test a new visitor
// sessionStorage.removeItem("VisitorName"); //DEBUG -- test a sessionStorage reset
sessionStorage.clear(); //REMOVE ON LAUNCH



function registerVisitor(anonCheck) {
    if (!anonCheck) {
        sessionStorage.setItem("VisitorName", document.getElementById("visitorName").value);
        sessionStorage.setItem("CompanyName", document.getElementById("visitorCompany").value);
        console.log(`New visitor registered -- ${sessionStorage.getItem("VisitorName")}`);
    } else {
        sessionStorage.setItem("VisitorName", "Anon");
        sessionStorage.setItem("CompanyName", "Anon");
        console.log(`Anon visitor registered -- ${sessionStorage.getItem("VisitorName")}`);
    }
}

