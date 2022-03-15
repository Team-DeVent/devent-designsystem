class Footer extends HTMLElement { 
    connectedCallback() {
        let allelements = this.querySelector('*')

        let projecttitle = this.getAttribute('project-title')
        let subtitle = this.getAttribute('sub-title')
        let companyname = this.getAttribute('company-name')
        let projectemail = this.getAttribute('project-email')
        

        let body_section = document.createElement('section')
        let body_container = document.createElement('div')
        let body_row = document.createElement('div')
        let body_col = document.createElement('div')
        let project_title = document.createElement('h2')
        let sub_title = document.createElement('b')
        let company_name = document.createElement('b')
        let project_email = document.createElement('b')

        let br_tag = document.createElement('br')

        body_section.classList.add('py-3', 'border-top')
        body_container.classList.add('container-fluid', 'px-4', 'my-5')
        body_row.classList.add('row', 'gx-5')
        body_col.classList.add('col-12', 'mb-5', 'mb-lg-0')

        project_title.classList.add('h4', 'fw-bolder')
        project_title.innerText = projecttitle

        sub_title.classList.add('mb-1')
        sub_title.innerText = subtitle
        sub_title.innerHTML = sub_title.innerHTML+"<br>"

        company_name.innerText = companyname
        company_name.innerHTML = company_name.innerHTML+"<br>"

        project_email.innerText = projectemail




        body_col.appendChild(project_title)
        body_col.appendChild(sub_title)

        body_col.appendChild(company_name)
        body_col.appendChild(project_email)


        body_row.appendChild(body_col)
        body_container.appendChild(body_row) 
        body_section.appendChild(body_container)
        this.appendChild(body_section)
    }
}

export { Footer }
