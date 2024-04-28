import React from 'react';
import styles from './buttons.module.css';

function Buttons() {

  const links = [
    { text: 'Quem sou eu?', url: '#' },
    { text: 'GitHub', url: 'https://github.com/diascw' },
    { text: 'Linkedin', url: 'https://www.linkedin.com/in/wanessadiascw/' },
    { text: 'Instagram', url: 'https://www.instagram.com/diascw/' }
  ];

  return (
    <ul className={styles.buttons}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
        </li>
      ))}
    </ul>
  );
}

export default Buttons;
