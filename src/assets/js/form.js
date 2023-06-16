'use strict';

import { sendReq } from "./sendRequest";

export const handleSubmit = () => {
    const form = document.querySelector('.contacts__form');
    const btn = form.querySelector('.btn');
    const inputs = form.querySelectorAll('input');

    const msg = document.createElement('div');
    msg.classList.add('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        btn.innerHTML = '<div class="spinner"><img src="./assets/img/spinner.gif" alt="spinner"/></div>';
        let dataObj = {};
        inputs.forEach(input => {
            dataObj = {...dataObj, [input.name]: input.value}
        })

        const resp = sendReq('mailer/smart.php', dataObj);
        resp.then((res) => {
            console.log(res);
            inputs.forEach(input => {
                input.value = '';
            });
            
        }).then(() => {
            msg.classList.add('message_success');
            msg.innerHTML = 'Письмо отправлено. Скоро я с вами свяжусь.'
            form.appendChild(msg);
        }).catch(() => {
            msg.classList.add('message_danger');
            msg.innerHTML = 'Произошла непредвиденная ошибка. Попробуйте еще раз.';
            form.appendChild(msg);
        }).finally(() => {
            btn.innerHTML = 'Отправить';
        })
        
        // setTimeout(() => {
        //     msg.classList.remove('message_success message_danger');
        // }, 5000)
    })
}