const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    const phone = (inputs.elements["subject"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
        alert("All fields are mandatory")
        return
    }
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "f0203355585a55",
        Password: "fca6eb59ee734c",
    //SecureToken: "104D979DABC4CF11203D275BB5218A5425B9",
    To : 'rey520900@gmail.com',
    From: email,
        Subject: "Report",
        Body: msg + "<br>" + name + "<br>" + phone
    }).then(msg => alert("The email successfully sent, we will notify your request"))
})