class Dropdown extends HTMLElement { 
    connectedCallback() {
        let allelements = this.innerHTML
        this.innerHTML = ''
        let dropdownlable = this.getAttribute('dropdown-lable')

        let body = document.createElement('ul')

        body.classList.add('dropdown-menu')
        body.setAttribute('aria-labelledby', dropdownlable)

        body.innerHTML = allelements
        this.appendChild(body)
        
    }
}



export { Dropdown }
