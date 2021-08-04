const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    // url da publicação
    await page.goto('');
    // await page.screenshot({path: 'instagram.png'});

    await page.evaluate(() => { 
        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var form = document.createElement("form");
        form.setAttribute('class','X7cDz');
        form.setAttribute('method','POST');
        form.setAttribute('data-bot-comment','');

        var textarea = document.createElement('textarea');
        textarea.setAttribute('class','Ypffh');
        textarea.setAttribute('name','comment_text');
        textarea.appendChild(document.createTextNode('oiiiiiiiiiii'));
        
        form.appendChild(textarea);

        var button = document.createElement('button');
        button.setAttribute('type','submit');
        button.setAttribute('class','sqdOP yWX7d y3zKF');
        button.appendChild(document.createTextNode('Clicar'));

        form.appendChild(button);

        var inputFullName = document.createElement('input');
        inputFullName.setAttribute('name','full_name');
        inputFullName.setAttribute('value','');
        form.appendChild(inputFullName);

        var inputUsername = document.createElement('input');
        inputUsername.setAttribute('name','username');
        inputUsername.setAttribute('value','');
        form.appendChild(inputUsername);

        var inputId = document.createElement('input');
        inputId.setAttribute('name', 'id');
        inputId.setAttribute('value','');
        form.appendChild(inputId);

        var inputProfileImg = document.createElement('input');
        inputProfileImg.setAttribute('name','profile_picture');
        inputProfileImg.setAttribute('value',''); 
        form.appendChild(inputProfileImg);

        var sectionCurrent = document.querySelector('.sH9wk ._JgwE');

        document.body.insertBefore(form, sectionCurrent);

        // console.log(document.querySelector('[document.querySelector]'))

        document.querySelector('form[data-bot-comment]').submit();
    });
    // await browser.close();
})();

function login() {
    document.querySelector('._15y0l > button').click();

    setTimeout(function() {
        document.querySelectorAll('.f0n8F').forEach(function(element) {
            let name = element.lastChild.getAttribute('name');

            if (name == 'username') {
                element.lastChild.click();
                element.lastChild.removeAttribute('data-focus-visible-added')
                element.lastChild.removeAttribute('value')
                element.lastChild.removeAttribute('aria-required')
                element.lastChild.removeAttribute('autocapitalize')
                element.lastChild.removeAttribute('autocapitalize')
                element.lastChild.removeAttribute('aria-label')
                element.lastChild.setAttribute('value', '');
                element.lastChild.removeAttribute('class')
                // element.lastChild.value = 'comercialvipeletronicos@gmail.com';
            }
            if (name == 'password') {
                element.lastChild.click();
                element.lastChild.removeAttribute('data-focus-visible-added')
                element.lastChild.removeAttribute('value')
                element.lastChild.removeAttribute('aria-required')
                element.lastChild.removeAttribute('autocapitalize')
                element.lastChild.removeAttribute('autocapitalize')
                element.lastChild.removeAttribute('aria-label')
                element.lastChild.setAttribute('value', '');
                element.lastChild.removeAttribute('class')
            }
        });
        document.querySelector('form div .bkEs3 button').removeAttribute('disabled').click();
    }, 10000);

}