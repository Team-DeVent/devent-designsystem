(()=>{"use strict";class t extends HTMLElement{constructor(){super(),this.addEventListener("click",(t=>{this.buttonToggle()}))}buttonToggle(){let t=document.querySelector("#navbar_toggle_button").getAttribute("aria-expanded"),e=document.querySelector("#navbar_toggle_icon");"true"==t?(e.classList.add("fa-times"),e.classList.remove("fa-bars")):(e.classList.add("fa-bars"),e.classList.remove("fa-times"))}connectedCallback(){let t=this.getAttribute("nav-title"),e=document.createElement("nav"),a=document.createElement("div"),d=document.createElement("div"),s=document.createElement("ul"),n=document.createElement("a"),i=document.createElement("button"),l=document.createElement("i");e.classList.add("navbar","navbar-expand-lg","navbar-light","navbar-blur","fixed-top"),a.classList.add("container-fluid","px-4","py-2"),n.classList.add("navbar-brand"),n.setAttribute("href","/"),n.innerText=t,i.classList.add("navbar-toggler"),i.setAttribute("id","navbar_toggle_button"),i.setAttribute("type","button"),i.setAttribute("data-bs-toggle","collapse"),i.setAttribute("data-bs-target","#navbar_supported_content"),i.setAttribute("aria-controls","navbar_supported_content"),i.setAttribute("aria-expanded","false"),l.classList.add("fas","fa-bars"),l.setAttribute("id","navbar_toggle_icon"),d.classList.add("collapse","navbar-collapse"),d.setAttribute("id","navbar_supported_content"),s.classList.add("navbar-nav","ms-auto","mb-2","mb-lg-0"),s.setAttribute("id","navbar_collapse"),i.appendChild(l),a.appendChild(n),a.appendChild(i),a.appendChild(d),d.appendChild(s),e.appendChild(a),this.appendChild(e)}}class e extends HTMLElement{connectedCallback(){let t=this.getAttribute("item-title"),e=this.getAttribute("item-link"),a=document.querySelector("#navbar_collapse"),d=document.createElement("li"),s=document.createElement("a");d.classList.add("navbar-item"),s.classList.add("nav-link","font-weight-sm"),s.setAttribute("aria-current","page"),s.setAttribute("href",e),s.innerText=t,d.appendChild(s),a.appendChild(d)}}class a extends HTMLElement{connectedCallback(){let t=this.querySelector("*"),e=this.getAttribute("header-title"),a=this.getAttribute("header-sub-title"),d=this.getAttribute("button-link"),s=this.getAttribute("button-title"),n=document.createElement("header"),i=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),r=document.createElement("div"),o=document.createElement("h1"),m=document.createElement("p"),b=document.createElement("div"),u=document.createElement("button");n.classList.add("bg-white","py-5"),i.classList.add("container-fluid","px-5","pt-4","pb-2"),l.classList.add("row","gx-5","justify-content-center"),c.classList.add("col-lg-7"),r.classList.add("text-center","mt-5"),o.classList.add("display-5","fw-bolder","text-dark","font-weight-lg","mb-2"),o.innerText=e,m.classList.add("lead","text-dark-50","font-weight-sm","mb-4"),m.innerText=a,b.classList.add("d-grid","gap-3","d-sm-flex","justify-content-sm-center"),u.classList.add("btn","btn-primary","font-weight-sm","px-4","py-3","mt-2"),u.setAttribute("onclick",`location.href = '${d}'`),u.innerText=s,r.appendChild(o),r.appendChild(m),c.appendChild(r),null!=t&&c.appendChild(t),l.appendChild(c),i.appendChild(l),n.appendChild(i),this.appendChild(n)}}class d extends HTMLElement{connectedCallback(){let t=this.getElementsByTagName("dds-modal-button"),e=this.getAttribute("modal-id"),a=this.getAttribute("modal-title"),d=this.getAttribute("modal-subtitle"),s=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div"),c=document.createElement("h5"),r=document.createElement("p"),o=document.createElement("div");s.classList.add("modal","fade"),s.setAttribute("id",e),s.setAttribute("tabindex","-1"),s.setAttribute("aria-labelledby",e+"Label"),s.setAttribute("aria-hidden","true"),n.classList.add("modal-dialog","modal-dialog-centered"),i.classList.add("modal-content"),l.classList.add("modal-body"),c.classList.add("modal-title","font-weight-lg"),c.innerText=a,r.classList.add("font-weight-md"),r.innerText=d,o.classList.add("d-grid","gap-2","d-flex","justify-content-end");for(let e=t.length-1;e>-1;e--)o.appendChild(t[e]);l.appendChild(c),l.appendChild(r),l.appendChild(o),i.appendChild(l),n.appendChild(i),s.appendChild(n),this.appendChild(s)}}class s extends HTMLElement{connectedCallback(){let t=this.getAttribute("is-dismiss"),e=this.getAttribute("button-color"),a=this.getAttribute("button-text-color");this.classList.add("col","col-md-auto","btn",e,a),"true"==t&&this.setAttribute("data-bs-dismiss","modal")}}class n extends HTMLElement{connectedCallback(){let t=this.querySelector("*"),e=this.getAttribute("sidebar-title"),a=this.getAttribute("sidebar-id"),d=document.createElement("div");d.classList.add("offcanvas","offcanvas-start"),d.setAttribute("id",a),d.setAttribute("aria-labelledb","offcanvasExampleLabel"),d.setAttribute("tabindex","-1"),d.setAttribute("data-bs-scroll","true"),d.setAttribute("data-bs-backdrop","false");let s=document.createElement("div");s.classList.add("offcanvas-header","border-bottom");let n=document.createElement("b");n.classList.add("navbar-brand"),n.innerText=e;let i=document.createElement("i");i.classList.add("fas","fa-times","mx-2"),i.setAttribute("data-bs-dismiss","offcanvas"),i.setAttribute("aria-label","Close");let l=document.createElement("div");l.classList.add("offcanvas-body"),l.appendChild(t),s.appendChild(n),s.appendChild(i),d.appendChild(s),d.appendChild(l),this.appendChild(d)}}customElements.define("dds-navbar",t),customElements.define("dds-navbar-item",e),customElements.define("dds-sidebar",n),customElements.define("dds-header",a),customElements.define("dds-modal",d),customElements.define("dds-modal-button",s)})();