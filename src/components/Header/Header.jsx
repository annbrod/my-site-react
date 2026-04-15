import './style.scss'
import { Link } from 'react-router-dom'
import Logo from '../ui/Logo/Logo'

function Header() {
    return (
        <header className="header">
            <Logo img="/images/inhtml/logo-light.svg" />
            <nav className="header__nav">
                <Link className="link link--header" to="/">
                    Главная
                </Link>
                <Link className="link link--header" to="/work">
                    Работа
                </Link>
                <Link className="link link--header" to="/hobby">
                    Хобби
                </Link>
                <Link className="link link--header" to="/socials">
                    Соцсети
                </Link>
                <Link className="link link--header" to="/wall">
                    Стена
                </Link>
            </nav>
        </header>
    )
}

export default Header
