import './style.scss'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import Logo from '../ui/Logo/Logo'
import Navigation from '../Navigation/Navigation'
import Burger from '../Burger/Burger'

function Header() {
    const { isMobile } = useBreakpoint()
    return (
        <header className="header">
            <div className="header__inner">
                <Logo img="/images/inhtml/logo-light.svg" />

                {isMobile ? <Burger /> : <Navigation />}
            </div>
        </header>
    )
}

export default Header
