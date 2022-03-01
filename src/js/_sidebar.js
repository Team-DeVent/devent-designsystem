class Sidebar extends HTMLElement { 
    connectedCallback() {
        let innerbody = this.querySelector('*')
        let title = this.getAttribute('sidebar-title')
        let id = this.getAttribute('sidebar-id')


        let body = document.createElement('div')
        body.classList.add('offcanvas', 'offcanvas-start');
        body.setAttribute('id', id)
        body.setAttribute('aria-labelledb', 'offcanvasExampleLabel')
        body.setAttribute('tabindex', '-1')
        body.setAttribute('tabindex', '-1')

        let body_header = document.createElement('div')
        body_header.classList.add('offcanvas-header');

        let header_title = document.createElement('b')
        header_title.classList.add('navbar-brand');
        header_title.innerText = title

        let header_icon = document.createElement('i')
        header_icon.classList.add('fas', 'fa-times', 'mx-2');
        header_icon.setAttribute('data-bs-dismiss', 'offcanvas')
        header_icon.setAttribute('aria-label', 'Close')

        let body_content = document.createElement('div')
        body_content.classList.add('offcanvas-body');


        body_content.appendChild(innerbody)
        body_header.appendChild(header_title)
        body_header.appendChild(header_icon)
        body.appendChild(body_header)
        body.appendChild(body_content)

        this.appendChild(body)
    }
}

export { Sidebar }