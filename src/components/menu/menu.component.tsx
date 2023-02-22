import './menu.component.css'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
function Menu() {
  return (
    <div className="container-menu">
      <div>
        <h3>
          <span className="first-name">Brian</span>{' '}
          <span className="last-name">Pontes</span>
        </h3>
      </div>
      <div className="menu-about">
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
      </div>
      <div className="menu-contact">
        <a className="menu-icon" href="#">
          <AiFillLinkedin className="menu-icon-align" />
          Linkedin
        </a>
        <a className="menu-icon" href="#">
          <AiFillGithub className="menu-icon-align" /> Github
        </a>
        <a className="menu-icon-contact" href="#">
          <AiFillMail className="menu-icon-align" />
          Contact me
        </a>
      </div>
    </div>
  )
}

export default Menu
