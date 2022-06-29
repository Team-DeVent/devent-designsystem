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


export { InputTag }