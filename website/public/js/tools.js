function createAlert(boolSuccess,flag = null) {
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
        link.setAttribute('href', '/level/2');
        link.innerHTML = 'Next Level';
        link.setAttribute('role', 'button');
        link.setAttribute('class', 'btn btn-outline-success')
        alert.append(link);
    }

    return alert;
}

export default {
    createAlert
}