class Navbar extends HTMLElement { 
    connectedCallback() {
        let title = this.getAttribute('nav-title');

        
        let body_nav = document.createElement('nav');

        let body_container = document.createElement('div');

        let body_collapse = document.createElement('div');

        let a_title = document.createElement('a');
        let button_toggle = document.createElement('button');
        let button_icon = document.createElement('i');


        body_nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'navbar-blur', 'fixed-top');

        body_container.classList.add('container-fluid', 'px-0');

        a_title.classList.add('navbar-brand')
        a_title.setAttribute('href', '/')

        button_toggle.classList.add('navbar-toggler')
        button_toggle.setAttribute('type', 'button')
        button_toggle.setAttribute('data-bs-toggle', 'collapse')
        button_toggle.setAttribute('data-bs-target', '#navbarSupportedContent')
        button_toggle.setAttribute('aria-controls', 'navbarSupportedContent')
        button_toggle.setAttribute('aria-expanded', 'false')

        button_icon.classList.add('fas', 'fa-bars')


        body_collapse.classList.add('collapse', 'navbar-collapse')
        body_collapse.setAttribute('id', 'navbarSupportedContent')


        

        profileImage.src = this.getAttribute('profile-src');
        profileImage.width = '40';
        profileImage.onclick = function() { location.href=`/@${uid}` }

        this.appendChild(body_nav);

    }
    
}
    
customElements.define('navbar', Navbar);

<nav class="navbar navbar-expand-lg navbar-dark navbar-blur fixed-top">
    <div class="container px-5">
        <a class="navbar-brand" href="#!">Frame</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">Services</a></li>
            </ul>
        </div>
    </div>
</nav>