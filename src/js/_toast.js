class Toast extends HTMLElement { 
    connectedCallback() {
        let innerbody = this.innerHTML
        let title = this.getAttribute('toast-title')
        let id = this.getAttribute('toast-id')
        let delay = this.getAttribute('toast-delay')
        let autohide = this.getAttribute('toast-autohide')

        let color = this.getAttribute('toast-class-color')
        let textcolor = this.getAttribute('toast-class-textcolor')

        let colorhex = this.getAttribute('toast-style-colorhex')


        let body = document.createElement('div')
        body.classList.add('toast');
        !color == false ? body.classList.add(color) : {}
        !textcolor == false ? body.classList.add(textcolor) : {}
        body.style.backgroundColor = !colorhex == false ? colorhex : {}
        body.setAttribute('id', id)
        body.setAttribute('role', 'alert')
        body.setAttribute('data-bs-animation', 'true')
        body.setAttribute('data-bs-autohide', autohide)
        body.setAttribute('data-bs-delay', delay)
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
        !title == false ? body.appendChild(body_header) : {}
        body.appendChild(body_content)

        this.appendChild(body)

        let toast_elements = body
        let toast = bootstrap.Toast.getOrCreateInstance(toast_elements)

        toast.show()
    }
}

export { Toast }
