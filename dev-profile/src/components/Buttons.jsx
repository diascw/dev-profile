import React from 'react';
import styles from './buttons.module.css';

function Buttons() {
  return (
    <ul className={styles.buttons}>
      <li>
        <a href="#">Quem sou eu?</a>
      </li>
      <li>
        <a href="https://github.com/diascw" target="_blank">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/wanessadiascw/" target="_blank">Linkedin</a>
      </li>
      <li>
        <a href="https://www.instagram.com/diascw/" target="_blank">Instagram</a>
      </li>
    </ul>
  );
}

export default Buttons;
