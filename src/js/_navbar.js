class Navbar extends HTMLElement { 
    constructor() {
        super()
        this.addEventListener('click', e => {
            this.buttonToggle()
        });
    }

    buttonToggle() {
        let is_expanded = document.querySelector("#navbar_toggle_button").getAttribute("aria-expanded")
        let icon = document.querySelector("#navbar_toggle_icon")

        if (is_expanded == 'true') {
            icon.classList.add('fa-times')
            icon.classList.remove('fa-bars')
        } else {
            icon.classList.add('fa-bars')
            icon.classList.remove('fa-times')
        }
    }

    connectedCallback() {
        let title = this.getAttribute('nav-title')

        
        let body_nav = document.createElement('nav')
        let body_container = document.createElement('div')
        let body_collapse = document.createElement('div')
        let collapse_list = document.createElement('ul')

        let a_title = document.createElement('a')
        let button_toggle = document.createElement('button')
        let button_icon = document.createElement('i')


        body_nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'navbar-blur', 'fixed-top');
        body_container.classList.add('container-fluid', 'px-4', 'py-2')

        a_title.classList.add('navbar-brand')
        a_title.setAttribute('href', '/')
        a_title.innerText = title

        button_toggle.classList.add('navbar-toggler')
        button_toggle.setAttribute('id', 'navbar_toggle_button')
        button_toggle.setAttribute('type', 'button')
        button_toggle.setAttribute('data-bs-toggle', 'collapse')
        button_toggle.setAttribute('data-bs-target', '#navbar_supported_content')
        button_toggle.setAttribute('aria-controls', 'navbar_supported_content')
        button_toggle.setAttribute('aria-expanded', 'false')

        button_icon.classList.add('fas', 'fa-bars')
        button_icon.setAttribute('id', 'navbar_toggle_icon')

        body_collapse.classList.add('collapse', 'navbar-collapse')
        body_collapse.setAttribute('id', 'navbar_supported_content')
        collapse_list.classList.add('navbar-nav', 'ms-auto', 'mb-2', 'mb-lg-0')
        collapse_list.setAttribute('id', 'navbar_collapse')


        button_toggle.appendChild(button_icon)
        body_container.appendChild(a_title)
        body_container.appendChild(button_toggle)
        body_container.appendChild(body_collapse)
        body_collapse.appendChild(collapse_list) 
        body_nav.appendChild(body_container)
        this.appendChild(body_nav)
    }
}

class NavbarItem extends HTMLElement { 
    connectedCallback() {
        let title = this.getAttribute('item-title')
        let link = this.getAttribute('item-link')
        
        let body_list = document.querySelector("#navbar_collapse")
        let item_li = document.createElement('li')
        let item_link = document.createElement('a')

        item_li.classList.add('navbar-item');
        item_link.classList.add('nav-link', 'font-weight-sm')
        item_link.setAttribute('aria-current', 'page')
        item_link.setAttribute('href', link)
        item_link.innerText = title

        item_li.appendChild(item_link)
        body_list.appendChild(item_li)
    }
}

export { Navbar, NavbarItem }



