(()=>{"use strict";class t extends HTMLElement{constructor(){super(),this.addEventListener("click",(t=>{this.buttonToggle()}))}buttonToggle(){let t=this.querySelector(".navbar").querySelector("div").querySelector("button"),e=t.getAttribute("aria-expanded"),s=t.querySelector("i");"true"==e?(s.classList.add("fa-times"),s.classList.remove("fa-bars")):(s.classList.add("fa-bars"),s.classList.remove("fa-times"))}connectedCallback(){let t=this.innerHTML;this.innerHTML="";let e=this.getAttribute("nav-title"),s=this.getAttribute("nav-fixed"),a=Math.floor(999999*Math.random()),d=`navbar_toggle_button_${a}`,i=`navbar_toggle_button_${a}`,n=document.createElement("nav"),l=document.createElement("div"),r=document.createElement("div"),c=document.createElement("ul"),o=document.createElement("a"),b=document.createElement("button"),u=document.createElement("i");n.classList.add("navbar","navbar-expand-lg","navbar-light","navbar-blur",`fixed-${s}`),l.classList.add("container-fluid","px-4","py-1"),o.classList.add("navbar-brand"),o.setAttribute("href","/"),o.innerHTML=e,b.classList.add("navbar-toggler"),b.setAttribute("id",d),b.setAttribute("type","button"),b.setAttribute("data-bs-toggle","collapse"),b.setAttribute("data-bs-target",`#navbar_supported_content_${a}`),b.setAttribute("aria-controls",`navbar_supported_content_${a}`),b.setAttribute("aria-expanded","false"),u.classList.add("fas","fa-bars"),u.setAttribute("id",i),r.classList.add("collapse","navbar-collapse"),r.setAttribute("id",`navbar_supported_content_${a}`),c.classList.add("navbar-nav","ms-auto","mb-2","mb-lg-0"),c.setAttribute("id",`navbar_collapse_${a}`),c.innerHTML=t,b.appendChild(u),l.appendChild(o),l.appendChild(b),l.appendChild(r),r.appendChild(c),n.appendChild(l),this.appendChild(n)}}class e extends HTMLElement{constructor(){super(),this.link="/"}onclick(){location.href=this.link}connectedCallback(){this.addEventListener("click",this.onclick.bind(this));let t=this.innerHTML,e=this.getAttribute("item-link");this.link=e;let s=document.createElement("li"),a=document.createElement("a");s.classList.add("navbar-item","pl-2","d-flex","flex-row"),a.classList.add("font-link","font-weight-sm","text-secondary"),a.setAttribute("aria-current","page"),a.setAttribute("href",e),a.innerHTML=t,this.innerHTML="",s.appendChild(a),this.appendChild(s)}}class s extends HTMLElement{connectedCallback(){this.classList.add("nav","flex-column","me-0"),this.setAttribute("id","v-pills-tab"),this.setAttribute("role","tablist"),this.setAttribute("aria-orientation","vertical")}}class a extends HTMLElement{constructor(){super(),this.addEventListener("click",(t=>{this.hideSidebar()}))}hideSidebar(){var t=document.getElementById("offcanvasExample"),e=new bootstrap.Offcanvas(t);e.toggle(),e.toggle(),e.hide(),this.getElementsByTagName("button")[0].classList.remove("active")}connectedCallback(){this.innerHTML="";let t=this.getAttribute("item-id"),e=this.getAttribute("is-selected"),s=document.createElement("button");s.classList.add("nav-link","nav-tab","true"==e?"active":"btn","btn"),s.setAttribute("id",`v-pills-${t}-tab`),s.setAttribute("data-bs-toggle","pill"),s.setAttribute("data-bs-target",`#v-pills-${t}`),s.setAttribute("type","button"),s.setAttribute("role","tab"),s.setAttribute("aria-controls",`v-pills-${t}`),s.setAttribute("aria-selected",e),s.innerText=t,this.appendChild(s)}}class d extends HTMLElement{connectedCallback(){let t=this.querySelector("*"),e=this.getAttribute("header-title"),s=this.getAttribute("header-sub-title"),a=this.getAttribute("button-link"),d=this.getAttribute("button-title"),i=document.createElement("header"),n=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),o=document.createElement("h1"),b=document.createElement("p"),u=document.createElement("div"),m=document.createElement("button");i.classList.add("bg-white","py-5"),n.classList.add("container-fluid","px-5","pt-4","pb-2"),l.classList.add("row","gx-5","justify-content-center"),r.classList.add("col-lg-7"),c.classList.add("text-center","mt-5"),o.classList.add("display-5","fw-bolder","text-dark","font-weight-lg","mb-2"),o.innerText=e,b.classList.add("font-weight-sm","mb-4","mt-3"),b.innerText=s,u.classList.add("d-grid","gap-3","d-sm-flex","justify-content-sm-center"),m.classList.add("btn","btn-primary","font-weight-sm","px-4","py-3","mt-2"),m.setAttribute("onclick",`location.href = '${a}'`),m.innerText=d,c.appendChild(o),c.appendChild(b),r.appendChild(c),null!=t&&r.appendChild(t),l.appendChild(r),n.appendChild(l),i.appendChild(n),this.appendChild(i)}}class i extends HTMLElement{connectedCallback(){let t=this.getElementsByTagName("dds-modal-button"),e=this.getElementsByTagName("dds-content"),s=this.getAttribute("modal-id"),a=this.getAttribute("modal-title"),d=this.getAttribute("modal-subtitle"),i=this.getAttribute("modal-align")||"center",n=this.getAttribute("content-align")||"start",l=this.getAttribute("is-scrollable")||"false",r=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),b=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),h=document.createElement("h5"),p=document.createElement("p"),g=document.createElement("div");r.classList.add("modal","fade"),r.setAttribute("id",s),r.setAttribute("tabindex","-1"),r.setAttribute("aria-labelledby",s+"Label"),r.setAttribute("aria-hidden","true"),c.classList.add("modal-dialog","modal-dialog-centered","d-flex",`align-items-${i}`),"true"==l&&c.classList.add("modal-dialog-scrollable"),o.classList.add("modal-content",`text-${n}`),b.classList.add("modal-body"),u.classList.add("modal-bottom"),h.classList.add("modal-title","font-weight-lg"),h.innerText=a,p.classList.add("font-weight-md"),p.innerText=d,g.classList.add("d-grid","gap-2","d-flex","justify-content-end");for(let e=t.length-1;e>-1;e--)g.appendChild(t[e]);for(let t=e.length-1;t>-1;t--)m.appendChild(e[t]);u.appendChild(g),b.appendChild(h),b.appendChild(p),b.appendChild(m),o.appendChild(b),o.appendChild(u),c.appendChild(o),r.appendChild(c),this.appendChild(r)}}class n extends HTMLElement{connectedCallback(){let t=this.getAttribute("is-dismiss"),e=this.getAttribute("button-color"),s=this.getAttribute("button-text-color"),a=this.getAttribute("button-arrangement")||"col-md-auto";this.classList.add("col",a,"btn",e,s),"true"==t&&this.setAttribute("data-bs-dismiss","modal")}}class l extends HTMLElement{connectedCallback(){this.innerHTML}}class r extends HTMLElement{connectedCallback(){let t=this.querySelector("*"),e=this.getAttribute("sidebar-title"),s=this.getAttribute("sidebar-id"),a=document.createElement("div");a.classList.add("offcanvas","offcanvas-start"),a.setAttribute("id",s),a.setAttribute("aria-labelledb","offcanvasExampleLabel"),a.setAttribute("tabindex","-1"),a.setAttribute("data-bs-scroll","true"),a.setAttribute("data-bs-backdrop","false");let d=document.createElement("div");d.classList.add("offcanvas-header","border-bottom");let i=document.createElement("b");i.classList.add("navbar-brand"),i.innerText=e;let n=document.createElement("i");n.classList.add("fas","fa-times","mx-2"),n.setAttribute("data-bs-dismiss","offcanvas"),n.setAttribute("aria-label","Close");let l=document.createElement("div");l.classList.add("offcanvas-body"),l.appendChild(t),d.appendChild(i),d.appendChild(n),a.appendChild(d),a.appendChild(l),this.appendChild(a)}}class c extends HTMLElement{connectedCallback(){this.querySelector("*");let t=this.getAttribute("project-title"),e=this.getAttribute("sub-title"),s=this.getAttribute("company-name"),a=this.getAttribute("project-email"),d=document.createElement("section"),i=document.createElement("div"),n=document.createElement("div"),l=document.createElement("div"),r=document.createElement("h2"),c=document.createElement("b"),o=document.createElement("b"),b=document.createElement("b");document.createElement("br"),d.classList.add("py-3","border-top"),i.classList.add("container-fluid","px-4","my-5"),n.classList.add("row","gx-5"),l.classList.add("col-12","mb-5","mb-lg-0"),r.classList.add("h4","fw-bolder"),r.innerText=t,c.classList.add("mb-1"),c.innerText=e,c.innerHTML=c.innerHTML+"<br>",o.innerText=s,o.innerHTML=o.innerHTML+"<br>",b.innerText=a,l.appendChild(r),l.appendChild(c),l.appendChild(o),l.appendChild(b),n.appendChild(l),i.appendChild(n),d.appendChild(i),this.appendChild(d)}}class o extends HTMLElement{connectedCallback(){let t=this.innerHTML,e=this.getAttribute("toast-title"),s=this.getAttribute("toast-id"),a=this.getAttribute("toast-delay"),d=this.getAttribute("toast-autohide"),i=this.getAttribute("toast-class-color"),n=this.getAttribute("toast-class-textcolor"),l=this.getAttribute("toast-style-colorhex"),r=document.createElement("div");r.classList.add("toast"),0!=!i||r.classList.add(i),0!=!n||r.classList.add(n),r.style.backgroundColor=0==!l?l:{},r.setAttribute("id",s),r.setAttribute("role","alert"),r.setAttribute("data-bs-animation","true"),r.setAttribute("data-bs-autohide",d),r.setAttribute("data-bs-delay",a),r.setAttribute("aria-live","assertive"),r.setAttribute("aria-atomic","true");let c=document.createElement("div");c.classList.add("toast-header");let o=document.createElement("strong");o.classList.add("me-auto"),o.innerText=e;let b=document.createElement("div");b.classList.add("toast-body"),b.innerHTML=t,this.innerHTML="",c.appendChild(o),0!=!e||r.appendChild(c),r.appendChild(b),this.appendChild(r);let u=r;bootstrap.Toast.getOrCreateInstance(u).show()}}class b extends HTMLElement{connectedCallback(){let t=this.innerHTML;this.innerHTML="";let e=this.getAttribute("dropdown-lable"),s=document.createElement("ul");s.classList.add("dropdown-menu"),s.setAttribute("aria-labelledby",e),s.innerHTML=t,this.appendChild(s)}}class u extends HTMLElement{constructor(){super(),this.tags=[],this.body_id="",console.log(this,this),this.addEventListener("change",(t=>{this.addTag()})),this.addEventListener("click",(t=>{"SPAN"==t.target.tagName&&this.removeTag(t.target.innerText)}))}connectedCallback(){let t=this.getAttribute("tag-id");this.body_id=t||Math.floor(999999*Math.random());let e=document.createElement("div"),s=document.createElement("input");s.classList.add("form-control","form-textarea"),s.setAttribute("id",`input_tag_${this.body_id}`),e.setAttribute("id",`body_tag_${this.body_id}`),this.appendChild(e),this.appendChild(s)}tags(){return this.tags}addTag(){let t=document.querySelector(`#input_tag_${this.body_id}`),e=document.querySelector(`#body_tag_${this.body_id}`);this.tags.indexOf(t.value)<=-1&&(this.tags.push(t.value),e.insertAdjacentHTML("beforeend",`<span class="badge badge-blue-tint m-1 mb-3" id="tags_${this.body_id}_${t.value}">${t.value}</span>`),t.value="")}removeTag(t){document.querySelector(`#body_tag_${this.body_id}`);let e=this.tags.indexOf(t);e>-1&&(this.tags.splice(e,1),document.getElementById(`tags_${this.body_id}_${t}`).remove())}}class m extends HTMLElement{constructor(){super(),this.tags=[],this.body_id="",this.addEventListener("click",(t=>{if("SPAN"==t.target.tagName){let e=t.target.classList.contains("dds_select_tag_disclicked"),s=t.target.innerText,a=this.tags.indexOf(s);e?(t.target.classList.remove("dds_select_tag_disclicked"),t.target.classList.add("dds_select_tag_clicked"),a>-1&&this.tags.splice(a,1),this.flop(t.target)):(t.target.classList.remove("dds_select_tag_clicked"),t.target.classList.add("dds_select_tag_disclicked"),a<=-1&&this.tags.push(s),this.click(t.target))}}))}connectedCallback(){let t=this.innerHTML,e=this.getAttribute("tag-id");this.body_id=e||Math.floor(999999*Math.random());let s=document.createElement("div"),a=document.createElement("div");s.classList.add("form-control"),s.setAttribute("id",`select_tag_${this.body_id}`),a.setAttribute("id",`deselect_tag_${this.body_id}`),a.innerHTML=t,this.innerHTML="",this.appendChild(s),this.appendChild(a)}tags(){return this.tags}click(t){let e=document.querySelector(`#select_tag_${this.body_id}`);t.setAttribute("class","badge badge-blue-tint me-1 dds_select_tag_disclicked"),e.insertAdjacentElement("beforeend",t)}flop(t){let e=document.querySelector(`#deselect_tag_${this.body_id}`);t.setAttribute("class","badge badge-blue-tint me-1 dds_select_tag_clicked"),e.insertAdjacentElement("beforeend",t)}}customElements.define("dds-navbar",t),customElements.define("dds-navbar-item",e),customElements.define("dds-navtab",s),customElements.define("dds-navtab-item",a),customElements.define("dds-sidebar",r),customElements.define("dds-header",d),customElements.define("dds-modal",i),customElements.define("dds-modal-button",n),customElements.define("dds-content",l),customElements.define("dds-footer",c),customElements.define("dds-toast",o),customElements.define("dds-dropdown",b),customElements.define("dds-input-tag",u),customElements.define("dds-select-tag",m)})();