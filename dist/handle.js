const dds = {
    toast: (arg) => {
        let body = document.querySelector("#toast")
        if (body == null) {
            let create_element = document.createElement("div");
            create_element.setAttribute('id', 'toast');
            create_element.classList.add('toast-container', 'position-fixed', 'bottom-0', 'start-50', 'translate-middle-x')
            document.querySelector('body').insertAdjacentElement('beforeend', create_element)
            body = document.querySelector("#toast")
        }
        setTimeout(() => {
            let element = document.createElement("dds-toast");
            element.setAttribute('toast-id', `toast_body_${Math.floor(Math.random()*1000000)}`);
            element.setAttribute('toast-delay', `5000`);
            element.setAttribute('toast-autohide', `true`);
            element.setAttribute('toast-style-colorhex', `#ffffffba`);
            element.innerHTML = `<div class="text-center font-weight-md ">${arg.content}</div>`


            body.insertAdjacentElement("beforeend", element)
        }, 100)
    }
}