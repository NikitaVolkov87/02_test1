document.addEventListener("DOMContentLoaded",function() {
    document.querySelector('button[type=submit]').addEventListener('click', function(e) {
        e.preventDefault();
        const formInputs = document.querySelectorAll('form input');
        const dataToSend = {};
        for ( let i = 0; i < formInputs.length; i++ ) {
            console.log(formInputs[i].value);
            dataToSend[formInputs[i].name] = formInputs[i].value;
        }
        const promise = new Promise(function(resolve) {
            sendAjax('processForm.php', dataToSend, resolve);
        });
        promise.then( function(result) {
            alert(result.body.name);
            console.log('promise result is: ', result);
        });
    });

    function sendAjax(url, data, resolve) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", '/'+url);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(data));
        xmlhttp.onload = function() {
            resolve(JSON.parse(xmlhttp.response));
        };
    }
});
