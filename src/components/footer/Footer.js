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
      <Icon icon={facebookF} color="#FFFCF2" />
      <Icon icon={instagramIcon} color="#FFFCF2" />
      <Icon icon={whatsappIcon} color="#FFFCF2" />
    </div>
  )
}

export default Footer;
