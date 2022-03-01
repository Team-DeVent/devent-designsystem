class Header extends HTMLElement { 
    connectedCallback() {
        let allelements = this.querySelector('*')

        let maintitle = this.getAttribute('header-title')
        let subtitle = this.getAttribute('header-sub-title')
        let buttonlink = this.getAttribute('button-link')
        let buttontitle = this.getAttribute('button-title')
        

        let body_header = document.createElement('header')
        let body_container = document.createElement('div')
        let body_row = document.createElement('div')
        let body_col = document.createElement('div')
        let body_text = document.createElement('div')

        let main_title = document.createElement('h1')
        let sub_title = document.createElement('p')

        let body_button = document.createElement('div')
        let main_button = document.createElement('button')


        body_header.classList.add('bg-white', 'py-5');
        body_container.classList.add('container-fluid', 'px-5', 'pt-4', 'pb-2')

        body_row.classList.add('row', 'gx-5', 'justify-content-center')
        body_col.classList.add('col-lg-7')
        body_text.classList.add('text-center', 'mt-5')

        main_title.classList.add('display-5', 'fw-bolder', 'text-dark', 'font-weight-lg', 'mb-2')
        main_title.innerText = maintitle

        sub_title.classList.add('lead', 'text-dark-50', 'font-weight-sm', 'mb-4')
        sub_title.innerText = subtitle

        body_button.classList.add('d-grid', 'gap-3', 'd-sm-flex', 'justify-content-sm-center')
        main_button.classList.add('btn', 'btn-primary', 'font-weight-sm', 'px-4', 'py-3', 'mt-2')

        main_button.setAttribute('onclick', `location.href = '${buttonlink}'`)
        main_button.innerText = buttontitle


        body_text.appendChild(main_title)
        body_text.appendChild(sub_title)

        body_col.appendChild(body_text)

        body_col.appendChild(allelements)

        body_row.appendChild(body_col)
        body_container.appendChild(body_row) 
        body_header.appendChild(body_container)
        this.appendChild(body_header)
    }
}

export { Header }