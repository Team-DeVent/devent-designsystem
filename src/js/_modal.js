class Modal extends HTMLElement { 
    connectedCallback() {
        let button_elements = this.getElementsByTagName('dds-modal-button')

        let modalid = this.getAttribute('modal-id')
        let modalmaintitle = this.getAttribute('modal-title')
        let modalsubtitle = this.getAttribute('modal-subtitle')


        let body = document.createElement('div')
        let modal_dialog = document.createElement('div')
        let modal_content = document.createElement('div')
        let modal_body = document.createElement('div')

        let modal_main_title = document.createElement('h5')
        let modal_sub_title = document.createElement('p')

        let button_group = document.createElement('div')


        body.classList.add('modal', 'fade');
        body.setAttribute('id', modalid)
        body.setAttribute('tabindex', '-1')
        body.setAttribute('aria-labelledby', modalid+'Label')
        body.setAttribute('aria-hidden', 'true')

        modal_dialog.classList.add('modal-dialog', 'modal-dialog-centered')
        modal_content.classList.add('modal-content')
        modal_body.classList.add('modal-body')

        modal_main_title.classList.add('modal-title', 'font-weight-lg')
        modal_main_title.innerText = modalmaintitle
        modal_sub_title.classList.add('font-weight-md')
        modal_sub_title.innerText = modalsubtitle

        button_group.classList.add('d-grid', 'gap-2', 'd-flex', 'justify-content-end')


        for (let index = button_elements.length-1; index > -1; index--) {
            button_group.appendChild(button_elements[index])
        }

        modal_body.appendChild(modal_main_title)
        modal_body.appendChild(modal_sub_title)
        modal_body.appendChild(button_group)

        modal_content.appendChild(modal_body)
        modal_dialog.appendChild(modal_content)
        body.appendChild(modal_dialog)

        this.appendChild(body)
    }
}


class ModalButton extends HTMLElement { 
    connectedCallback() {
        let isdismiss = this.getAttribute('is-dismiss')
        let buttoncolor = this.getAttribute('button-color')
        let textcolor = this.getAttribute('button-text-color')

        this.classList.add('col', 'col-md-auto', 'btn', buttoncolor, textcolor);
        this.setAttribute('type', 'button')

        if (isdismiss == 'true') {
            this.setAttribute('data-bs-dismiss', 'modal')
        }
    }
}


export { Modal, ModalButton }