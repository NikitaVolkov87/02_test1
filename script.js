document.addEventListener("DOMContentLoaded",function() {
    document.querySelector('button[type=submit]').addEventListener('click', function(e) {
        e.preventDefault();
        const formInputs = document.querySelectorAll('form input');
        const dataToSend = {};
        for ( let i = 0; i < formInputs.length; i++ ) {
            console.log(formInputs[i].value);
            dataToSend[formInputs[i].name] = formInputs[i].value;
        }
        sendAjax('processForm.php', dataToSend);
    });

    function sendAjax(url, data) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", '/'+url);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(data));
        xmlhttp.onload = function() {
            return xmlhttp.response;
        }
    }
});
