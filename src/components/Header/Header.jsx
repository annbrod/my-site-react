import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/work">Работа</Link>
            <Link to="/hobby">Хобби</Link>
            <Link to="/socials">Соцсети</Link>
            <Link to="/wall">Стена</Link>
        </nav>
    )
}

export default Header
