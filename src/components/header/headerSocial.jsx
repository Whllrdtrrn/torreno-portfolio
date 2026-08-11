import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaBehanceSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
export const headerSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/Whllrdtrrn" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
        <a href="https://www.linkedin.com/in/whillourd-torreno-74429527b" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://www.behance.net/whilloutorreno/projects" target="_blank" rel="noopener noreferrer"><FaBehanceSquare/></a>
        <a href="https://www.facebook.com/whllrdtrrn/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
    </div>
  )
}
export default headerSocial
