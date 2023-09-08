import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
export const headerSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/Whllrdtrrn"><FaGithubSquare/></a>
        <a href="https://www.facebook.com/whllrdtrrn/photos_by"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/"><FaInstagramSquare/></a>
    </div>
  )
}
export default headerSocial
