import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
export const headerSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/Whllrdtrrn" target='_blank'><FaGithubSquare/></a>
        <a href="https://www.facebook.com/whllrdtrrn/photos_by" target='_blank'><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/" target='_blank'><FaInstagramSquare/></a>
    </div>
  )
}
export default headerSocial
