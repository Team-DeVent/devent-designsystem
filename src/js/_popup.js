class Popup extends HTMLElement { 
    connectedCallback() {
        let innerbody = this.innerHTML
        let title = this.getAttribute('popup-title')
        let id = this.getAttribute('popup-id')


        let body = document.createElement('div')
        body.classList.add('toast');
        body.setAttribute('id', id)
        body.setAttribute('role', 'alert')
        body.setAttribute('data-bs-animation', 'true')
        body.setAttribute('data-bs-autohide', 'true')
        body.setAttribute('data-bs-delay', '5000')
        body.setAttribute('aria-live', 'assertive')
        body.setAttribute('aria-atomic', 'true')

        let body_header = document.createElement('div')
        body_header.classList.add('toast-header');

        let header_title = document.createElement('strong')
        header_title.classList.add('me-auto');
        header_title.innerText = title

        let body_content = document.createElement('div')
        body_content.classList.add('toast-body');
        body_content.innerHTML = innerbody

        this.innerHTML = ''

        body_header.appendChild(header_title)
        body.appendChild(body_header)
        body.appendChild(body_content)

        this.appendChild(body)

        let popup_elements = body
        let popup = bootstrap.Toast.getOrCreateInstance(popup_elements)

        popup.show()
    }
}

export { Popup }
