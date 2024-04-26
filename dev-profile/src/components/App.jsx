import app from './app.module.css';
import profile from '../assets/profile.jpeg';

function App() {
  return (
    <div className={app.container}>
      <div className={app.profile}>
        <img src={profile} alt="foto Wanessa Dias usando óculos" className={app.profileImg} />
        <h2>Wanessa Dias</h2>
        <h3>Estudante de Eng. Software, Puc Minas</h3>
      </div>
      <ul className={app.linkList}>
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
      <footer className={app.footer}>
        CAMP IOASYS | 2024
      </footer>
    </div>
  );
}

export default App;
