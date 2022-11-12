class Navbar extends HTMLElement { 
    constructor() {
        super()
        this.addEventListener('click', e => {
            this.buttonToggle()
        });
    }

    buttonToggle() {
        let button_body = this.querySelector('.navbar')
        .querySelector('div')
        .querySelector('button')
        let is_expanded = button_body.getAttribute("aria-expanded")

        let icon = button_body.querySelector("i")

        if (is_expanded == 'true') {
            icon.classList.add('fa-times')
            icon.classList.remove('fa-bars')
        } else {
            icon.classList.add('fa-bars')
            icon.classList.remove('fa-times')
        }
    }

    connectedCallback() {
        let innerbody = this.innerHTML
        this.innerHTML = ''

        let title = this.getAttribute('nav-title')
        let fixed = this.getAttribute('nav-fixed')

        let random_id = Math.floor(Math.random()*999999)
        let toggle_button_id = `navbar_toggle_button_${random_id}`
        let toggle_icon_id = `navbar_toggle_button_${random_id}`

        
        let body_nav = document.createElement('nav')
        let body_container = document.createElement('div')
        let body_collapse = document.createElement('div')
        let collapse_list = document.createElement('ul')

        let a_title = document.createElement('a')
        let button_toggle = document.createElement('button')
        let button_icon = document.createElement('i')


        body_nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'navbar-blur', `fixed-${fixed}`);
        body_container.classList.add('container-fluid', 'px-4', 'py-1')

        a_title.classList.add('navbar-brand')
        a_title.setAttribute('href', '/')
        a_title.innerHTML = title

        button_toggle.classList.add('navbar-toggler')
        button_toggle.setAttribute('id', toggle_button_id)
        button_toggle.setAttribute('type', 'button')
        button_toggle.setAttribute('data-bs-toggle', 'collapse')
        button_toggle.setAttribute('data-bs-target', `#navbar_supported_content_${random_id}`)
        button_toggle.setAttribute('aria-controls', `navbar_supported_content_${random_id}`)
        button_toggle.setAttribute('aria-expanded', 'false')

        button_icon.classList.add('fas', 'fa-bars')
        button_icon.setAttribute('id', toggle_icon_id)

        body_collapse.classList.add('collapse', 'navbar-collapse')
        body_collapse.setAttribute('id', `navbar_supported_content_${random_id}`)
        collapse_list.classList.add('navbar-nav', 'ms-auto', 'mb-2', 'mb-lg-0')
        collapse_list.setAttribute('id', `navbar_collapse_${random_id}`)
        collapse_list.innerHTML = innerbody

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
    constructor() {
        super();

        this.link = '/';

    }

    onclick() {
        location.href = this.link
    }

    connectedCallback() {
        this.addEventListener('click', this.onclick.bind(this));
        let content = this.innerHTML
        let link = this.getAttribute('item-link')
        this.link = link

        let item_li = document.createElement('li')
        let item_link = document.createElement('a')

        item_li.classList.add('navbar-item', 'pl-2', 'd-flex', 'flex-row');
        item_link.classList.add('font-link', 'font-weight-sm', 'text-secondary')
        item_link.setAttribute('aria-current', 'page')
        item_link.setAttribute('href', link)
        item_link.innerHTML = content
        this.innerHTML = ''


        item_li.appendChild(item_link)
        this.appendChild(item_li)
        
    }
}

class Navtab extends HTMLElement { 
    connectedCallback() {
        this.classList.add('nav', 'flex-column', 'me-0');
        this.setAttribute('id', 'v-pills-tab')
        this.setAttribute('role', 'tablist')
        this.setAttribute('aria-orientation', 'vertical')

    }
}

class NavtabItem extends HTMLElement { 
    constructor() {
        super()

        this.addEventListener('click', e => {
            this.hideSidebar()
        });
    }

    hideSidebar() {
        var myOffcanvas = document.getElementById('offcanvasExample')
        var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
        bsOffcanvas.toggle()
        bsOffcanvas.toggle()
        bsOffcanvas.hide()
        this.getElementsByTagName('button')[0].classList.remove('active')
        
    }

    connectedCallback() {
        this.innerHTML = ''
        let id = this.getAttribute('item-id')
        let selected = this.getAttribute('is-selected')
        
        let item = document.createElement('button')
        item.classList.add('nav-link', 'nav-tab', (selected == 'true' ? 'active' : 'btn'), 'btn');
        item.setAttribute('id', `v-pills-${id}-tab`)
        item.setAttribute('data-bs-toggle', 'pill')
        item.setAttribute('data-bs-target', `#v-pills-${id}`)
        item.setAttribute('type', 'button')
        item.setAttribute('role', 'tab')
        item.setAttribute('aria-controls', `v-pills-${id}`)
        item.setAttribute('aria-selected', selected)
        item.innerText = id

        
        this.appendChild(item)
        
    }
}


export { Navbar, NavbarItem, Navtab, NavtabItem }



