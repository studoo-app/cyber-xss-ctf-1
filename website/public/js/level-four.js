import Tools from './tools.js';
console.log('checker 4 loaded')

const successPayload = "alert('XSS test vulnerability')";
console.log(document.querySelector('#img-display').hasAttribute('onload'));
console.log(document.querySelector('#img-display').getAttribute('onload'));
console.log(document.querySelector('#img-display').getAttribute('onload') === successPayload)
if(document.querySelector('.alert-success')){
    if(
        document.querySelector('#img-display').getAttribute('onload') === successPayload) {
        console.log('success');
        document.querySelector('#level-one-container').append(Tools.createAlert(true,'/level/5','FLAG{XSS_4s_Cl3v3r}'));
    }else{
        console.log('failed');
        document.querySelector('#level-one-container').append(Tools.createAlert(false));
    }
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