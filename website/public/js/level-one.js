import Tools from './tools.js';
console.log('checker 1 loaded')

const successPayload = '<script>alert("XSS test vulnerability")</script>';
const progress = Tools.getDataFromStorage();

if(document.querySelector('.alert-success')){
    if(
        document.querySelector('#username-data').innerHTML === successPayload) {
        console.log('success');
        Tools.updateLevelProgression(1, true, 'FLAG{XSS_1s_D1sc0v3r3d}');
        document.querySelector('#level-one-container').append(Tools.createAlert(true,'/level/2','FLAG{XSS_1s_D1sc0v3r3d}'));
    }else{
        console.log('failed');
        Tools.updateLevelProgression(1, false, null);
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