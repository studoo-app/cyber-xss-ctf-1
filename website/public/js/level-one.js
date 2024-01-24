console.log('checker 1 loaded')

const successPayload = '<script>alert("XSS test vulnerability")</script>';

if(
    document.querySelector('.alert-success') &&
    document.querySelector('#username-data').innerHTML === successPayload) {
    console.log('success');
    document.querySelector('#level-one-container').append(createAlert(true));
}else{
    console.log('failed');
    document.querySelector('#level-one-container').append(createAlert(false));
}

function createAlert(boolSuccess) {
    let alert = document.createElement('div');
    alert.classList.add('alert');
    alert.classList.add(boolSuccess ? 'alert-success' : 'alert-danger');
    alert.setAttribute('role', 'alert');

    let heading = document.createElement('h4');
    heading.classList.add('alert-heading');
    heading.innerHTML = boolSuccess ? 'Success!' : 'Failed!';
    alert.append(heading);

    let message = document.createElement('p');
    message.innerHTML = boolSuccess ? 'XSS Success! => FLAG{XSS_1s_4w3s0m3}' : 'XSS Failed! Try again';
    alert.append(message);

    if(boolSuccess) {
        let link = document.createElement('a');
        link.classList.add('alert-link');
        link.setAttribute('href', '/level/2');
        link.innerHTML = 'Next Level';
        link.setAttribute('role', 'button');
        link.setAttribute('class', 'btn btn-outline-success')
        alert.append(link);
    }

    return alert;
}



// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log('test');
//     let username = document.querySelector('#username').value;
//     console.log(username);
//     const formData = new FormData();
//     formData.append('username', username);
//     fetch('/level/1/check', {
//         method: 'POST',
//         body: formData,
//     })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
//             if (data.status === 'OK') {
//                 document.querySelector('.alert-success').removeAttribute('hidden');
//                 document.querySelector('.alert-success strong').innerHTML = data.username;
//             }
//             console.log("request succeeded");
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
// });