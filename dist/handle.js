const dds = {
    popup: (arg) => {
        let body = document.querySelector("#popup")
        if (body == null) {
            let create_element = document.createElement("div");
            create_element.setAttribute('id', 'popup');
            create_element.classList.add('toast-container', 'position-fixed', 'bottom-0', 'start-50', 'translate-middle-x')
            document.querySelector('body').insertAdjacentElement('beforeend', create_element)
            body = document.querySelector("#popup")
        }
        setTimeout(() => {
            let element = document.createElement("dds-popup");
            element.setAttribute('popup-id', `popup_body_${Math.floor(Math.random()*1000000)}`);
            element.setAttribute('popup-delay', `5000`);
            element.setAttribute('popup-autohide', `true`);
            element.setAttribute('popup-style-colorhex', `#ffffffba`);
            element.innerHTML = `<div class="text-center font-weight-md ">${arg.content}</div>`


            body.insertAdjacentElement("beforeend", element)
        }, 100)
    }
}