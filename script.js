document.addEventListener("DOMContentLoaded",function() {
    document.querySelector('button[type=submit]').addEventListener('click', function(e) {
        e.preventDefault();
        const formInputs = document.querySelectorAll('form input');
        const dataToSend = {};
        for ( let i = 0; i < formInputs.length; i++ ) {
            console.log(formInputs[i].value);
            dataToSend[formInputs[i].name] = formInputs[i].value;
        }
        sendAjax('processForm.php', dataToSend)
            .then( function(result) {
                console.log('promise result is: ', result);
                return result;
            }, function(r) {
                console.warn(r);
            })
            .then(function(r) {
                console.log('2nd promise result is: ', r);
                return r;
            })
            .then(function (r) {
                t1(r, 'test2');
            })
            .catch(error => {
                alert(error);
            });
    });

    function sendAjax(url, data) {
        return new Promise(function(resolve, reject) {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", '/'+url);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(JSON.stringify(data));
            xmlhttp.onload = function() {
                if (this.status == 200) {
                    resolve(JSON.parse(this.response));
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };
        });
    }

    function t1(i1, i2) {
        console.log( 't1 -> ', i1);
        console.log( 't1 -> ', i2);
    }
});
