class InputTag extends HTMLElement { 
    constructor(){
        super();
        this.tags = [];
        this.body_id = ''

        console.log(this, this)
        this.addEventListener('change', e => {
            this.addTag()
        });

        this.addEventListener('click', e => {
            if (e.target.tagName == "SPAN") {
                this.removeTag(e.target.innerText)
            }
        });
    }

    connectedCallback() {
        let tagid = this.getAttribute('tag-id')

        this.body_id = tagid || Math.floor(Math.random()*999999)


        let body_tag = document.createElement('div')
        let body_input = document.createElement('input')
        body_input.classList.add("form-control", "form-textarea")
        //body_input.setAttribute('onchange', 'this.addTag()')
        body_input.setAttribute('id', `input_tag_${this.body_id}`)

        body_tag.setAttribute('id', `body_tag_${this.body_id}`)



        this.appendChild(body_tag)
        this.appendChild(body_input)


    }

    tags() {
        return this.tags
    }

    addTag() {
        let tag_data = document.querySelector(`#input_tag_${this.body_id}`);
        let tag_body = document.querySelector(`#body_tag_${this.body_id}`);

        let index = this.tags.indexOf(tag_data.value);
        if (index <= -1) {
            this.tags.push(tag_data.value)
            tag_body.insertAdjacentHTML('beforeend', `<span class="badge badge-blue-tint m-1 mb-3" id="tags_${this.body_id}_${tag_data.value}">${tag_data.value}</span>`)
            tag_data.value = ''
        }
    }

    removeTag(tag) {
        let tag_body = document.querySelector(`#body_tag_${this.body_id}`);

        let index = this.tags.indexOf(tag);
        if (index > -1) {
            this.tags.splice(index, 1);
            document.getElementById(`tags_${this.body_id}_${tag}`).remove()
        }
    }

}

class SelectTag extends HTMLElement { 
    constructor(){
        super();
        this.tags = [];
        this.body_id = ''

        this.addEventListener('click', e => {
            if (e.target.tagName == "SPAN") {
                let has_class = e.target.classList.contains('dds_select_tag_disclicked');
                let tag = e.target.innerText
                let index = this.tags.indexOf(tag);

                if (has_class) {
                    e.target.classList.remove('dds_select_tag_disclicked')
                    e.target.classList.add('dds_select_tag_clicked')
                    if (index > -1) {
                        this.tags.splice(index, 1);
                    }

                    this.flop(e.target)

                } else {
                    e.target.classList.remove('dds_select_tag_clicked')
                    e.target.classList.add('dds_select_tag_disclicked')
                    if (index <= -1) {
                        this.tags.push(tag)
                    }
                    this.click(e.target)
                }
            }
        });
    }

    connectedCallback() {
        let inner_elements = this.innerHTML
        let tagid = this.getAttribute('tag-id')

        this.body_id = tagid || Math.floor(Math.random()*999999)


        let body_input = document.createElement('div')
        let body_diselect_tag = document.createElement('div')

        body_input.classList.add("form-control")
        body_input.setAttribute('id', `select_tag_${this.body_id}`)

        body_diselect_tag.setAttribute('id', `deselect_tag_${this.body_id}`)
        body_diselect_tag.innerHTML = inner_elements

        this.innerHTML = ''


        this.appendChild(body_input)
        this.appendChild(body_diselect_tag)


    }

    tags() {
        return this.tags
    }

    click(e) {
        let select_body = document.querySelector(`#select_tag_${this.body_id}`)
        let select_tag = e
        select_tag.setAttribute('class', `badge badge-blue-tint me-1 dds_select_tag_disclicked`)
        select_body.insertAdjacentElement("beforeend", e)
    }

    flop(e) {
        let diselect_body = document.querySelector(`#deselect_tag_${this.body_id}`)
        let select_tag = e
        select_tag.setAttribute('class', `badge badge-blue-tint me-1 dds_select_tag_clicked`)
        diselect_body.insertAdjacentElement("beforeend", e)
    
    }

}


export { InputTag, SelectTag }