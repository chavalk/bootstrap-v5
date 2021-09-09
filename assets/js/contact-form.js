var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.status == 200) {
            status.classList.add("success");
            status.innerHTML = "Thanks for your submission!";
            form.reset()
            console.log(response)
        }else {
            status.classList.add("error");
            status.innerHTML = "Oops! There was a problem submitting your form"
            form.reset()
            console.log(response)
        }
    }).catch(error => {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)