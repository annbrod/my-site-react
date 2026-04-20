import './style.scss'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import Logo from '../ui/Logo/Logo'
import Navigation from '../Navigation/Navigation'
import Burger from '../Burger/Burger'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

function Header() {
    const { isMobile } = useBreakpoint()
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={clsx('header', { 'header--scrolled': isScrolled })}>
            <div className="header__inner">
                <Logo img="/images/inhtml/logo-light.svg" />

                {isMobile ? <Burger /> : <Navigation />}
            </div>
        </header>
    )
}

export default Header
