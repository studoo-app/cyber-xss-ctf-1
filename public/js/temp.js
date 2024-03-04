let alert = document.createElement('div');
alert.classList.add('alert');
alert.classList.add('alert-danger');
alert.setAttribute('id','xss-bomb');
alert.setAttribute('role', 'alert');
alert.textContent = "XSS WORKS";

document.querySelector('#target-content').replaceWith(alert)