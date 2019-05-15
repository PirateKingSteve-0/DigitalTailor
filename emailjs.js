function sendEmail(){
    let name = $("#formName").val();
    let email = $("#formEmail").val();

    // upper cases the first letter of every name for professional purposes
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let templateParams = {
        "name": name,
        "email": email,
    }

    // SDK for the emailJs.com API. Pass in templateParams
    emailjs.send('gmail', 'tailorme_request', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            $('#email-alert').css('visibility', 'visible');
        }, function(error) {
            console.log('FAILED...', error);
    });

    // reset contact form just incase the form holds previous values.
    // ran into problems with renavigating back to the form and causing 
    // an error: "XHR failed loading...". I think this helped.
    document.getElementById("contact-form").reset();
}

function sendShareEmail(sender, receiver, email, outfits){

    // upper cases the first letter of every name for professional purposes
    sender = sender.charAt(0).toUpperCase() + sender.slice(1);
    receiver = receiver.charAt(0).toUpperCase() + receiver.slice(1);
    let email_html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Digital Tailor</title>
            </head>
            <body>
        `
    let count = 0;

    for(outfit in outfits){
        count++;
        email_html += `<span style="padding-right: 50px; padding-left: 35px;">Outfit #${count}:</span>`
    }
    email_html += "<br>";
    for(i = 1; i <= count; i++){
        if(typeof outfits[`outfit${i}`]['top'] != 'undefined')
            email_html += `<a href='${outfits[`outfit${i}`]['top']['url']}'><img src='${outfits[`outfit${i}`]['top']['images']}' style="width: 150px"></a>`
    }
    email_html += "<br>";
    for(i = 1; i <= count; i++){
        if(typeof outfits[`outfit${i}`]['mid'] != 'undefined')
            email_html += `<a href='${outfits[`outfit${i}`]['mid']['url']}'><img src='${outfits[`outfit${i}`]['mid']['images']}' style="width: 150px"></a>`
    }
    email_html += "<br>";
    for(i = 1; i <= count; i++){
        if(typeof outfits[`outfit${i}`]['bot'] != 'undefined')
            email_html += `<a href='${outfits[`outfit${i}`]['bot']['url']}'><img src='${outfits[`outfit${i}`]['bot']['images']}' style="width: 150px"></a>`
    }


    let templateParams = {
        "sender": sender,
        "receiver": receiver,
        "email": email,
        "message_html": email_html 
    }

    // SDK for the emailJs.com API. Pass in templateParams
    emailjs.send('gmail', 'template_shareOutfits', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            $('#email-alert').css('display', 'block');
            $('#email-alert').css('visibility', 'visible');
        }, function(error) {
            console.log('FAILED...', error);
    });
    $("#share-modal").modal('hide');
}