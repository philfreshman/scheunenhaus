let form = document.querySelector("form");
function sendMail(event){

    let firstName = form.children[0].children[2];
    let lastName = form.children[0].children[3];
    let email = form.children[1].children[2];
    let message = form.children[2].children[2];
    let checkbox = form.children[3].children[2];


    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(message.value);


    function resetValues(){
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        message.value = '';
        checkbox.checked = false;
    }
    

    Email.send({
        Host: "smtp.strato.de",
        Username: "mail@philfreshman.com",
        Password: "5DpWKAiXRazKf3e",
        To: "philipswiezak@gmail.com",
        From: email.value.toString(),
        Subject: "Scheunenhaus Anfrage",
        Body:
            `<b>Name:</b> ${firstName.value} <br>
             <b>Nachname:</b> ${lastName.value} <br><br>
             <b>Nachricht:</b> ${message.value}`

    }).then(
        message => console.log("Mail:" + message)
    );
    resetValues();
}


/* SmtpJS.com - v3.0.0 */

const Email = {
    send: function (a) {
        return new Promise(function (n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1),
                a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",
                t,
                function (e) {
                    n(e)
                })
        })
    }, ajaxPost: function (e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
            var e = a.responseText;
            null != t && t(e)
        }, a.send(n)
    }, ajax: function (e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function () {
            var e = t.responseText;
            null != n && n(e)
        }, t.send()
    }, createCORSRequest: function (e, n) {
        var t = new XMLHttpRequest;
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
    }
};