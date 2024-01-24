// GESTION DES ELEMENTS DU DOM
function createAlert(boolSuccess,nextLevelUrl = null, flag = null) {
    let alert = document.createElement('div');
    alert.classList.add('alert');
    alert.classList.add(boolSuccess ? 'alert-success' : 'alert-danger');
    alert.setAttribute('role', 'alert');

    let heading = document.createElement('h4');
    heading.classList.add('alert-heading');
    heading.innerHTML = boolSuccess ? 'Success!' : 'Failed!';
    alert.append(heading);

    let message = document.createElement('p');
    message.innerHTML = boolSuccess ? `XSS Success! => ${flag}` : 'XSS Failed! Try again';
    alert.append(message);

    if(boolSuccess) {
        let link = document.createElement('a');
        link.classList.add('alert-link');
        link.setAttribute('href', nextLevelUrl);
        link.innerHTML = 'Next Level';
        link.setAttribute('role', 'button');
        link.setAttribute('class', 'btn btn-outline-success')
        alert.append(link);
    }

    return alert;
}

// LOCAL STORAGE ACCESS

function getDataFromStorage(){
    return  localStorage.getItem('xss-ctf') ?
        JSON.parse(localStorage.getItem('xss-ctf')) :
        [
            {
                level: 1,
                success: null,
                flag: null
            },
            {
                level: 2,
                success: null,
                flag: null
            },
            {
                level: 3,
                success: null,
                flag: null
            },
            {
                level: 4,
                success: null,
                flag: null
            }
        ]
}


function addDataToStorage(data){
    localStorage.setItem('xss-ctf',JSON.stringify(data))
}

function updateLevelProgression(level, success, flag){
    let data = getDataFromStorage();
    data[level-1].success = success;
    data[level-1].flag = flag;

    addDataToStorage(data);
}

function resetProgression(){
    localStorage.removeItem('xss-ctf');
    location.reload()
}

export default {
    createAlert,
    getDataFromStorage,
    updateLevelProgression,
    resetProgression
}