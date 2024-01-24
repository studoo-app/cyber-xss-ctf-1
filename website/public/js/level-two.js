import Tools from './tools.js';
console.log('checker 2 loaded')

const successPayload = 'alert("XSS test vulnerability")';

if(document.querySelector('.alert-success')){
    console.log(document.querySelector('#username-data').nextSibling.innerText === successPayload);

    if(document.querySelector('#username-data').nextSibling.innerText === successPayload) {
        console.log('success');
        document.querySelector('#level-one-container').append(Tools.createAlert(true,'/level/3','FLAG{xss_2s_s0_0bvi0us}'));
    }else{
        console.log('failed');
        document.querySelector('#level-one-container').append(Tools.createAlert(false));
    }
}
