import './style.scss'

import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import clsx from 'clsx'

import Navigation from '../Navigation/Navigation'
import Logo from '../ui/Logo/Logo'
import IconButton from '../ui/IconButton/IconButton'

function Burger() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleBurger = () => {
        setIsOpen((prev) => !prev)
        window.document.documentElement.classList.toggle('no-scroll', !isOpen)
    }
    const location = useLocation()

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    return (
        <div className={clsx('burger', { 'burger--open': isOpen })}>
            <IconButton
                name="burger"
                classMod="icon-button--burger"
                onClick={toggleBurger}
            />
            <div className="burger__inner">
                <div className="burger__top">
                    <Logo img="/images/inhtml/logo-light.svg" />
                    <IconButton
                        name="close"
                        classMod="icon-button--burger"
                        onClick={toggleBurger}
                    />
                </div>
                <nav className="burger__nav">
                    <Navigation classMod="navigation--burger" />
                </nav>
            </div>
        </div>
    )
}

export default Burger
