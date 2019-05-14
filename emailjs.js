function sendEmail(){
    let name = $("#formName").val();
    let email = $("#formEmail").val();

    // upper cases the first letter of every name for professional purposes
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let templateParams = {
        "name": name,
        "email": email,
    }
    
    console.log(templateParams["name"]);
    console.log(templateParams["email"]);
    console.log(templateParams);

    // SDK for the emailJs.com API. Pass in templateParams
    emailjs.send('lanitech92_gmail_com', 'template_JrdgeTBI', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
    });

    // reset contact form just incase the form holds previous values.
    // ran into problems with renavigating back to the form and causing 
    // an error: "XHR failed loading...". I think this helped.
    document.getElementById("contact-form").reset();
}