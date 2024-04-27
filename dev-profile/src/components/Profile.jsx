import React from 'react';
import profileImage from '../assets/profile.jpeg';
import styles from './profile.module.css';

function Profile() {
  return (
    <div className={styles.profile}>
      <img src={profileImage} alt="foto Wanessa Dias usando óculos" className={styles.profileImg} />
      <h2>Wanessa Dias</h2>
      <h3>Estudante de Eng. Software, Puc Minas</h3>
    </div>
  );
}

export default Profile;
