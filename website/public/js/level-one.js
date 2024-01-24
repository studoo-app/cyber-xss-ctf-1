import Tools from './tools.js';
console.log('checker 1 loaded')

const successPayload = '<script>alert("XSS test vulnerability")</script>';

if(document.querySelector('.alert-success')){
    if(
        document.querySelector('#username-data').innerHTML === successPayload) {
        Tools.updateLevelProgression(1, true, 'FLAG{XSS_1s_D1sc0v3r3d}');
        document.querySelector('#level-one-container').append(Tools.createAlert(true,'/level/2','FLAG{XSS_1s_D1sc0v3r3d}'));
    }else{
        Tools.updateLevelProgression(1, false, null);
        document.querySelector('#level-one-container').append(Tools.createAlert(false));
    }
}
