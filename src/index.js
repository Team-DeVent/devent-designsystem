import { Navbar, NavbarItem } from './js/_navbar.js';
import { Header } from './js/_header.js';
import { Modal, ModalButton } from './js/_modal.js';

import "./scss/style.scss";


    
customElements.define('dds-navbar', Navbar);
customElements.define('dds-navbar-item', NavbarItem);
customElements.define('dds-header', Header);
customElements.define('dds-modal', Modal);
customElements.define('dds-modal-button', ModalButton);