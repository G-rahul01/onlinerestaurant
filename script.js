const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${message.value}`;
    Email.send({
        SecureToken: "3730e443-645f-4ef9-825e-ab27b8175ac9 ",
        To: 'rg429948@gmail.com',
        From: "rg429948@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        (message) => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    let isValid = true;

    for (const item of items) {
        if (item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            isValid = false;
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
    }

    return isValid;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (checkInputs() && !fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});
