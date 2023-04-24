var form = document.getElementById("contect-send");

async function handleSubmit(event) {
    event.preventDefault();

    var status = document.getElementById("message");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if(response.ok) {
            alert('Thank you for your email!');
            form.reset();
        } else {
            if (Object.hasOwn(data, 'errors')) {
                alert(data["errors"].map(error => error["message"]).join(", "))
              } else {
                alert("Oops! There was a problem submitting your form")
              }
        }
    }).catch(error => {
        alert("Oops! There was a problem submitting your form")
    });
}

form.addEventListener("sumbit", handleSubmit)

