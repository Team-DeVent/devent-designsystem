(()=>{"use strict";class t extends HTMLElement{constructor(){super(),this.addEventListener("click",(t=>{this.buttonToggle()}))}buttonToggle(){let t=document.querySelector("#navbar_toggle_button").getAttribute("aria-expanded"),e=document.querySelector("#navbar_toggle_icon");"true"==t?(e.classList.add("fa-times"),e.classList.remove("fa-bars")):(e.classList.add("fa-bars"),e.classList.remove("fa-times"))}connectedCallback(){let t=this.getAttribute("nav-title"),e=document.createElement("nav"),a=document.createElement("div"),d=document.createElement("div"),s=document.createElement("ul"),i=document.createElement("a"),n=document.createElement("button"),l=document.createElement("i");e.classList.add("navbar","navbar-expand-lg","navbar-light","navbar-blur","fixed-top"),a.classList.add("container-fluid","px-4","py-2"),i.classList.add("navbar-brand"),i.setAttribute("href","/"),i.innerText=t,n.classList.add("navbar-toggler"),n.setAttribute("id","navbar_toggle_button"),n.setAttribute("type","button"),n.setAttribute("data-bs-toggle","collapse"),n.setAttribute("data-bs-target","#navbar_supported_content"),n.setAttribute("aria-controls","navbar_supported_content"),n.setAttribute("aria-expanded","false"),l.classList.add("fas","fa-bars"),l.setAttribute("id","navbar_toggle_icon"),d.classList.add("collapse","navbar-collapse"),d.setAttribute("id","navbar_supported_content"),s.classList.add("navbar-nav","ms-auto","mb-2","mb-lg-0"),s.setAttribute("id","navbar_collapse"),n.appendChild(l),a.appendChild(i),a.appendChild(n),a.appendChild(d),d.appendChild(s),e.appendChild(a),this.appendChild(e)}}class e extends HTMLElement{connectedCallback(){let t=this.innerHTML,e=this.getAttribute("item-link"),a=document.querySelector("#navbar_collapse"),d=document.createElement("li"),s=document.createElement("a");d.classList.add("navbar-item","px-2"),s.classList.add("font-link","font-weight-sm"),s.setAttribute("aria-current","page"),s.setAttribute("href",e),s.innerHTML=t,d.appendChild(s),a.appendChild(d)}}class a extends HTMLElement{connectedCallback(){this.classList.add("nav","flex-column","me-0"),this.setAttribute("id","v-pills-tab"),this.setAttribute("role","tablist"),this.setAttribute("aria-orientation","vertical")}}class d extends HTMLElement{connectedCallback(){this.innerHTML="";let t=this.getAttribute("item-id"),e=this.getAttribute("is-selected");console.log(t);let a=document.createElement("button");a.classList.add("nav-link","nav-tab","btn"),a.setAttribute("id",`v-pills-${t}-tab`),a.setAttribute("data-bs-toggle","pill"),a.setAttribute("data-bs-target",`#v-pills-${t}`),a.setAttribute("type","button"),a.setAttribute("role","tab"),a.setAttribute("aria-controls",`v-pills-${t}`),a.setAttribute("aria-selected",e),a.setAttribute("onclick","hideSidebar()"),a.innerText=t,this.appendChild(a)}}class s extends HTMLElement{connectedCallback(){let t=this.querySelector("*"),e=this.getAttribute("header-title"),a=this.getAttribute("header-sub-title"),d=this.getAttribute("button-link"),s=this.getAttribute("button-title"),i=document.createElement("header"),n=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),o=document.createElement("h1"),b=document.createElement("p"),m=document.createElement("div"),u=document.createElement("button");i.classList.add("bg-white","py-5"),n.classList.add("container-fluid","px-5","pt-4","pb-2"),l.classList.add("row","gx-5","justify-content-center"),r.classList.add("col-lg-7"),c.classList.add("text-center","mt-5"),o.classList.add("display-5","fw-bolder","text-dark","font-weight-lg","mb-2"),o.innerText=e,b.classList.add("lead","text-dark-50","font-weight-sm","mb-4"),b.innerText=a,m.classList.add("d-grid","gap-3","d-sm-flex","justify-content-sm-center"),u.classList.add("btn","btn-primary","font-weight-sm","px-4","py-3","mt-2"),u.setAttribute("onclick",`location.href = '${d}'`),u.innerText=s,c.appendChild(o),c.appendChild(b),r.appendChild(c),null!=t&&r.appendChild(t),l.appendChild(r),n.appendChild(l),i.appendChild(n),this.appendChild(i)}}class i extends HTMLElement{connectedCallback(){let t=this.getElementsByTagName("dds-modal-button"),e=this.getAttribute("modal-id"),a=this.getAttribute("modal-title"),d=this.getAttribute("modal-subtitle"),s=document.createElement("div"),i=document.createElement("div"),n=document.createElement("div"),l=document.createElement("div"),r=document.createElement("h5"),c=document.createElement("p"),o=document.createElement("div");s.classList.add("modal","fade"),s.setAttribute("id",e),s.setAttribute("tabindex","-1"),s.setAttribute("aria-labelledby",e+"Label"),s.setAttribute("aria-hidden","true"),i.classList.add("modal-dialog","modal-dialog-centered"),n.classList.add("modal-content"),l.classList.add("modal-body"),r.classList.add("modal-title","font-weight-lg"),r.innerText=a,c.classList.add("font-weight-md"),c.innerText=d,o.classList.add("d-grid","gap-2","d-flex","justify-content-end");for(let e=t.length-1;e>-1;e--)o.appendChild(t[e]);l.appendChild(r),l.appendChild(c),l.appendChild(o),n.appendChild(l),i.appendChild(n),s.appendChild(i),this.appendChild(s)}}class n extends HTMLElement{connectedCallback(){let t=this.getAttribute("is-dismiss"),e=this.getAttribute("button-color"),a=this.getAttribute("button-text-color");this.classList.add("col","col-md-auto","btn",e,a),"true"==t&&this.setAttribute("data-bs-dismiss","modal")}}class l extends HTMLElement{connectedCallback(){let t=this.querySelector("*"),e=this.getAttribute("sidebar-title"),a=this.getAttribute("sidebar-id"),d=document.createElement("div");d.classList.add("offcanvas","offcanvas-start"),d.setAttribute("id",a),d.setAttribute("aria-labelledb","offcanvasExampleLabel"),d.setAttribute("tabindex","-1"),d.setAttribute("data-bs-scroll","true"),d.setAttribute("data-bs-backdrop","false");let s=document.createElement("div");s.classList.add("offcanvas-header","border-bottom");let i=document.createElement("b");i.classList.add("navbar-brand"),i.innerText=e;let n=document.createElement("i");n.classList.add("fas","fa-times","mx-2"),n.setAttribute("data-bs-dismiss","offcanvas"),n.setAttribute("aria-label","Close");let l=document.createElement("div");l.classList.add("offcanvas-body"),l.appendChild(t),s.appendChild(i),s.appendChild(n),d.appendChild(s),d.appendChild(l),this.appendChild(d)}}class r extends HTMLElement{connectedCallback(){this.querySelector("*");let t=this.getAttribute("project-title"),e=this.getAttribute("sub-title"),a=this.getAttribute("company-name"),d=this.getAttribute("project-email"),s=document.createElement("section"),i=document.createElement("div"),n=document.createElement("div"),l=document.createElement("div"),r=document.createElement("h2"),c=document.createElement("b"),o=document.createElement("b"),b=document.createElement("b");document.createElement("br"),s.classList.add("py-3","border-top"),i.classList.add("container-fluid","px-4","my-5"),n.classList.add("row","gx-5"),l.classList.add("col-12","mb-5","mb-lg-0"),r.classList.add("h4","fw-bolder"),r.innerText=t,c.classList.add("mb-1"),c.innerText=e,c.innerHTML=c.innerHTML+"<br>",o.innerText=a,o.innerHTML=o.innerHTML+"<br>",b.innerText=d,l.appendChild(r),l.appendChild(c),l.appendChild(o),l.appendChild(b),n.appendChild(l),i.appendChild(n),s.appendChild(i),this.appendChild(s)}}class c extends HTMLElement{connectedCallback(){let t=this.innerHTML,e=this.getAttribute("popup-title"),a=this.getAttribute("popup-id"),d=document.createElement("div");d.classList.add("toast"),d.setAttribute("id",a),d.setAttribute("role","alert"),d.setAttribute("data-bs-animation","true"),d.setAttribute("data-bs-autohide","true"),d.setAttribute("data-bs-delay","5000"),d.setAttribute("aria-live","assertive"),d.setAttribute("aria-atomic","true");let s=document.createElement("div");s.classList.add("toast-header");let i=document.createElement("strong");i.classList.add("me-auto"),i.innerText=e;let n=document.createElement("div");n.classList.add("toast-body"),n.innerHTML=t,this.innerHTML="",s.appendChild(i),d.appendChild(s),d.appendChild(n),this.appendChild(d);let l=d;bootstrap.Toast.getOrCreateInstance(l).show()}}customElements.define("dds-navbar",t),customElements.define("dds-navbar-item",e),customElements.define("dds-navtab",a),customElements.define("dds-navtab-item",d),customElements.define("dds-sidebar",l),customElements.define("dds-header",s),customElements.define("dds-modal",i),customElements.define("dds-modal-button",n),customElements.define("dds-footer",r),customElements.define("dds-popup",c)})();