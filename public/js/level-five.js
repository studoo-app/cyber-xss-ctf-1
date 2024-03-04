import Tools from './tools.js';
console.log('checker 5 loaded')

if(document.querySelector('.alert-success')){
    if(
        document.querySelector('#xss-bomb') &&
        document.querySelector('#xss-bomb').textContent === "XSS WORKS" &&
        document.querySelector('#xss-bomb').classList.contains('alert') &&
        document.querySelector('#xss-bomb').classList.contains('alert-danger')
    ){
        console.log("success")
        Tools.updateLevelProgression(5, true, 'FLAG{XSS_5s_D0m1n4t0r}');
        document.querySelector('#level-five-container').insertBefore(
            Tools.createAlert(true,'/level/5','FLAG{XSS_5s_D0m1n4t0r}'),
            document.querySelector('#level-five-container').firstChild
        );
    }else{
        console.log("failed")
        Tools.updateLevelProgression(5, false, null);
        document.querySelector('#level-five-container').insertBefore(
            Tools.createAlert(false),
            document.querySelector('#level-five-container').firstChild
        );
    }
}


