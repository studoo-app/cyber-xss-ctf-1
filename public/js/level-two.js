import Tools from './tools.js';
console.log('checker 2 loaded')

const successPayload = 'alert("XSS test vulnerability")';

if(document.querySelector('.alert-success')){
    console.log(document.querySelector('#username-data').nextSibling.innerText === successPayload);

    if(document.querySelector('#username-data').nextSibling.innerText === successPayload) {
        Tools.updateLevelProgression(2, true, 'FLAG{xss_2s_s0_0bvi0us}');
        document.querySelector('#level-two-container').insertBefore(
            Tools.createAlert(true,'/level/3','FLAG{xss_2s_s0_0bvi0us}'),
            document.querySelector('#level-two-container').firstChild
        );
    }else{
        Tools.updateLevelProgression(2, false, null);
        document.querySelector('#level-two-container').insertBefore(
            Tools.createAlert(false),
            document.querySelector('#level-two-container').firstChild
        );
    }
}
