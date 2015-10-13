page('/', ageCheck);
page('/agecheck', ageCheck);
page('/over', over18);
page('*', notFound);
page();

function ageCheck() {
    console.log('age check');
    renderForm(window.agecheckTemplate);
}

function over18() {
    console.log('over 18');
    renderForm(window.over18Template);
}

function notFound() {
    console.log('NOT FOUND');
}

function renderForm(template) {
    document.querySelectorAll('.page')[0].innerHTML = template();
}
