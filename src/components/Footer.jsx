import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <h5>Designed by Tarik Sitki</h5>
      <p>
        All Rights Reserved{" "}
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
      </p>
    </footer>
  );
}

export default Footer;