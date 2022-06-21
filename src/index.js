import { Navbar, NavbarItem, Navtab, NavtabItem } from './js/_navbar.js';
import { Header } from './js/_header.js';
import { Modal, ModalButton, ModalContent } from './js/_modal.js';
import { Sidebar } from './js/_sidebar.js';
import { Footer } from './js/_footer.js';
import { Toast } from './js/_toast.js';
import { Dropdown } from './js/_dropdown.js';

import "./scss/style.scss";
    
customElements.define('dds-navbar', Navbar);
customElements.define('dds-navbar-item', NavbarItem);
customElements.define('dds-navtab', Navtab);
customElements.define('dds-navtab-item', NavtabItem);

customElements.define('dds-sidebar', Sidebar);

customElements.define('dds-header', Header);
customElements.define('dds-modal', Modal);
customElements.define('dds-modal-button', ModalButton);
customElements.define('dds-content', ModalContent);

customElements.define('dds-footer', Footer);

customElements.define('dds-toast', Toast);

customElements.define('dds-dropdown', Dropdown);

