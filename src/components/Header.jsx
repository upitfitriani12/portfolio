import profilePicture from '../assets/profile-picture.png'
import '../styles/Header.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";


function Header() {

  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture}/>
            <h3>Upit Fitriani</h3>
            <p>Programmer - Data Analyst - Data Scientist</p>
            <div className='socialMedia'>
                <a href=''><FaInstagram /></a>
                <a href=''><FaGithub /></a>
                <a href=''><FaLinkedin /></a>
                <a href=''><FaHackerrank /></a>
            </div>
        </div>
    </header>
  )
}

export default Header