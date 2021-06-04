import React from 'react';
import Toggle from './Toggle'
import { ThemeContext } from './themeContext'
import { navLinks } from "../data/navLinks";
import logo from '../assets/logo-full.svg';
import logoWhite from '../assets/logo-full-white.svg';
import logoIcon from '../assets/logo-icon.svg';
import logoIconWhite from '../assets/logo-icon-white.svg';

const Header = () => {
    const { theme } = React.useContext(ThemeContext)
    return(
        <div className="text-gray-700 dark:bg-gray-700 dark:text-gray-200 p-3">
            <div className="flex flex-row mx-4 lg:mx-32 content-center">
                <a className="content-center hidden lg:flex" href="/"><img src={(theme !== "dark" ? logo : logoWhite)} alt="logo-full" width="180" /></a>
                <a className="flex content-center mx-auto lg:hidden" href="/"><img src={(theme !== "dark" ? logoIcon : logoIconWhite)} alt="logo-full" width="30" /></a>
                <ul className="flex-row ml-auto hidden lg:flex space-x-5 my-2 mr-5">
                    {
                        navLinks.map((nav, index) => {
                            return <li className="transition-all delay-150 hover:text-primary font-bold text-lg" key={index} ><a href={nav.path}>{nav.title}</a></li>
                        })
                    }
                </ul>
                <Toggle/>
            </div>
        </div>
    )
}

export default Header;