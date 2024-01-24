import Tools from './tools.js';
console.log('checker 4 loaded')

const successPayload = "alert('XSS test vulnerability')";

if(document.querySelector('.alert-success')){
    if(
        document.querySelector('#img-display').getAttribute('onload') === successPayload) {
        Tools.updateLevelProgression(4, true, 'FLAG{XSS_4s_Cl3v3r}');
        document.querySelector('#level-one-container').append(Tools.createAlert(true,'/level/5','FLAG{XSS_4s_Cl3v3r}'));
    }else{
        Tools.updateLevelProgression(4, false, null);
        document.querySelector('#level-one-container').append(Tools.createAlert(false));
    }
}
