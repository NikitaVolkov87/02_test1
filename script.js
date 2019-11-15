document.addEventListener("DOMContentLoaded",function() {
    document.querySelector('button[type=submit]').addEventListener('click', function(e) {
        e.preventDefault();
        const formInputs = document.querySelectorAll('form input');
        const dataToSend = {};
        for ( let i = 0; i < formInputs.length; i++ ) {
            console.log(formInputs[i].value);
            dataToSend[formInputs[i].name] = formInputs[i].value;
        }
        const promise = new Promise((resolve) => {
            // resolve(sendAjax('processForm.php', dataToSend));
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", '/processForm.php');
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(JSON.stringify(dataToSend));
            xmlhttp.onload = () => {
                resolve( JSON.parse( xmlhttp.response ));
            };
        });
        promise.then( result => console.log('promise result is: ', result));
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
