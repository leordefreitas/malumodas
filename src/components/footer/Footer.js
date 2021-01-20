import React from 'react';
import './Footer.css';
// icones
import { Icon } from '@iconify/react';
import facebookF from '@iconify/icons-cib/facebook-f';
import instagramIcon from '@iconify/icons-cib/instagram';
import whatsappIcon from '@iconify/icons-cib/whatsapp';

function Footer() {
  return (
    <div className="footer">
      <div id="footer-icones-titulo-logo">
        <div id="footer-icones-titulo">
          <p id="footer-titulo">Redes sociais</p>
          <div id="footer-icones">
            <Icon icon={facebookF} color="#FFFCF2" />
            <Icon icon={instagramIcon} color="#FFFCF2" />
            <Icon icon={whatsappIcon} color="#FFFCF2" />
          </div>
        </div>
        <a className="logo-all" href="#">Malu Modas</a>
      </div>
      <p id="footer-copyrights">Desenvolvido por Leonardo R. de Freitas</p>
    </div>
  )
}

export default Footer;
