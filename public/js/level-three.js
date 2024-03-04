import Tools from './tools.js';
console.log('checker 3 loaded')

const successPayload = '<script>alert("XSS test vulnerability")</script>';

if(document.querySelector('.alert-success')){
    if(
        document.querySelector('#username-data').innerHTML === successPayload) {
        Tools.updateLevelProgression(3, true, 'FLAG{XSS_3s_v3rY_0bvi0us}');
        document.querySelector('#level-three-container').insertBefore(
            Tools.createAlert(true,'/level/4','FLAG{XSS_3s_v3rY_0bvi0us}'),
            document.querySelector('#level-three-container').firstChild
        );
    }else{
        Tools.updateLevelProgression(3, false, null);
        document.querySelector('#level-three-container').insertBefore(
            Tools.createAlert(false),
            document.querySelector('#level-three-container').firstChild
        );
    }
}
